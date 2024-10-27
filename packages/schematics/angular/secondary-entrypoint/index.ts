/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  Rule,
  SchematicsException,
  Tree,
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  strings,
  url,
} from '@angular-devkit/schematics';
import { JSONFile } from '../utility/json-file';
import { latestVersions } from '../utility/latest-versions';
import { relativePathToWorkspaceRoot } from '../utility/paths';
import { buildDefaultPath, getWorkspace } from '../utility/workspace';
import { Schema as LibraryOptions } from './schema';

function updateTsConfig(packageName: string, ...paths: string[]) {
  return (host: Tree) => {
    if (!host.exists('tsconfig.json')) {
      return host;
    }

    const file = new JSONFile(host, 'tsconfig.json');
    const jsonPath = ['compilerOptions', 'paths', packageName];
    const value = file.get(jsonPath);
    file.modify(jsonPath, Array.isArray(value) ? [...value, ...paths] : paths);
  };
}

export default function (options: LibraryOptions): Rule {
  return async (host: Tree) => {
    return async (host: Tree) => {
      const workspace = await getWorkspace(host);
      const project = workspace.projects.get(options.project);

      if (!project) {
        throw new SchematicsException(`Project "${options.project}" does not exist.`);
      }

      if (options.path === undefined) {
        options.path = buildDefaultPath(project);
      }
      const libDir = `${options.path}/${options.name}`;
      const pkgPath = `${project.root}/package.json`;

      const pkg = host.readJson(pkgPath) as { name: string } | null;
      if (pkg === null) {
        throw new SchematicsException('Could not find package.json');
      }

      const mainEntryPoint = pkg.name;
      const secondaryEntryPoint = `${mainEntryPoint}/${options.name}`;

      let folderName = mainEntryPoint.startsWith('@') ? mainEntryPoint.slice(1) : mainEntryPoint;
      if (/[A-Z]/.test(folderName)) {
        folderName = strings.dasherize(folderName);
      }

      const distRoot = `dist/${folderName}/${options.name}`;

      const templateSource = apply(url('./files'), [
        applyTemplates({
          ...strings,
          ...options,
          mainEntryPoint,
          secondaryEntryPoint,
          relativePathToWorkspaceRoot: relativePathToWorkspaceRoot(libDir),
          packageName: options.name,
          angularLatestVersion: latestVersions.Angular.replace(/~|\^/, ''),
          tsLibLatestVersion: latestVersions['tslib'].replace(/~|\^/, ''),
        }),
        move(libDir),
      ]);

      return chain([
        mergeWith(templateSource),
        updateTsConfig(secondaryEntryPoint, './' + distRoot),
      ]);
    };
  };
}
