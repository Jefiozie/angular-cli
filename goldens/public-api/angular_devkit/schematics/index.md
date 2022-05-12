## API Report File for "@angular-devkit/schematics"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import { BaseException } from '@angular-devkit/core';
import { JsonValue } from '@angular-devkit/core';
import { logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { Path } from '@angular-devkit/core';
import { PathFragment } from '@angular-devkit/core';
import { schema } from '@angular-devkit/core';
import { strings } from '@angular-devkit/core';
import { Subject } from 'rxjs';
import { Url } from 'url';
import { virtualFs } from '@angular-devkit/core';

// @public (undocumented)
export type Action = CreateFileAction | OverwriteFileAction | RenameFileAction | DeleteFileAction;

// @public (undocumented)
export interface ActionBase {
    // (undocumented)
    readonly id: number;
    // (undocumented)
    readonly parent: number;
    // (undocumented)
    readonly path: Path;
}

// @public (undocumented)
export class ActionList implements Iterable<Action> {
    // (undocumented)
    [Symbol.iterator](): IterableIterator<Action>;
    // (undocumented)
    protected _action(action: Partial<Action>): void;
    // (undocumented)
    create(path: Path, content: Buffer): void;
    // (undocumented)
    delete(path: Path): void;
    // (undocumented)
    find(predicate: (value: Action) => boolean): Action | null;
    // (undocumented)
    forEach(fn: (value: Action, index: number, array: Action[]) => void, thisArg?: {}): void;
    // (undocumented)
    get(i: number): Action;
    // (undocumented)
    has(action: Action): boolean;
    // (undocumented)
    get length(): number;
    // (undocumented)
    optimize(): void;
    // (undocumented)
    overwrite(path: Path, content: Buffer): void;
    // (undocumented)
    push(action: Action): void;
    // (undocumented)
    rename(path: Path, to: Path): void;
}

// @public
export function apply(source: Source, rules: Rule[]): Source;

// @public (undocumented)
export function applyContentTemplate<T>(options: T): FileOperator;

// @public (undocumented)
export function applyPathTemplate<T extends PathTemplateData>(data: T, options?: PathTemplateOptions): FileOperator;

// @public (undocumented)
export function applyTemplates<T extends object>(options: T): Rule;

// @public (undocumented)
export function applyToSubtree(path: string, rules: Rule[]): Rule;

// @public (undocumented)
export function asSource(rule: Rule): Source;

// @public (undocumented)
export type AsyncFileOperator = (tree: FileEntry) => Observable<FileEntry | null>;

// @public
abstract class BaseWorkflow implements Workflow {
    constructor(options: BaseWorkflowOptions);
    // (undocumented)
    get context(): Readonly<WorkflowExecutionContext>;
    // (undocumented)
    protected _context: WorkflowExecutionContext[];
    // (undocumented)
    protected _createSinks(): Sink[];
    // (undocumented)
    protected _dryRun: boolean;
    // (undocumented)
    get engine(): Engine<{}, {}>;
    // (undocumented)
    protected _engine: Engine<{}, {}>;
    // (undocumented)
    get engineHost(): EngineHost<{}, {}>;
    // (undocumented)
    protected _engineHost: EngineHost<{}, {}>;
    // (undocumented)
    execute(options: Partial<WorkflowExecutionContext> & RequiredWorkflowExecutionContext): Observable<void>;
    // (undocumented)
    protected _force: boolean;
    // (undocumented)
    protected _host: virtualFs.Host;
    // (undocumented)
    get lifeCycle(): Observable<LifeCycleEvent>;
    // (undocumented)
    protected _lifeCycle: Subject<LifeCycleEvent>;
    // (undocumented)
    get registry(): schema.SchemaRegistry;
    // (undocumented)
    protected _registry: schema.CoreSchemaRegistry;
    // (undocumented)
    get reporter(): Observable<DryRunEvent>;
    // (undocumented)
    protected _reporter: Subject<DryRunEvent>;
}

// @public (undocumented)
interface BaseWorkflowOptions {
    // (undocumented)
    dryRun?: boolean;
    // (undocumented)
    engineHost: EngineHost<{}, {}>;
    // (undocumented)
    force?: boolean;
    // (undocumented)
    host: virtualFs.Host;
    // (undocumented)
    registry?: schema.CoreSchemaRegistry;
}

// @public (undocumented)
export function branchAndMerge(rule: Rule, strategy?: MergeStrategy): Rule;

// @public (undocumented)
export function callRule(rule: Rule, input: Tree_2 | Observable<Tree_2>, context: SchematicContext): Observable<Tree_2>;

// @public (undocumented)
export function callSource(source: Source, context: SchematicContext): Observable<Tree_2>;

// @public
export function chain(rules: Rule[]): Rule;

// @public (undocumented)
export class CircularCollectionException extends BaseException {
    constructor(name: string);
}

// @public
export interface Collection<CollectionMetadataT extends object, SchematicMetadataT extends object> {
    // (undocumented)
    readonly baseDescriptions?: Array<CollectionDescription<CollectionMetadataT>>;
    // (undocumented)
    createSchematic(name: string, allowPrivate?: boolean): Schematic<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    readonly description: CollectionDescription<CollectionMetadataT>;
    // (undocumented)
    listSchematicNames(includeHidden?: boolean): string[];
}

// @public
export type CollectionDescription<CollectionMetadataT extends object> = CollectionMetadataT & {
    readonly name: string;
    readonly extends?: string[];
};

// @public (undocumented)
export class CollectionImpl<CollectionT extends object, SchematicT extends object> implements Collection<CollectionT, SchematicT> {
    constructor(_description: CollectionDescription<CollectionT>, _engine: SchematicEngine<CollectionT, SchematicT>, baseDescriptions?: CollectionDescription<CollectionT>[] | undefined);
    // (undocumented)
    readonly baseDescriptions?: CollectionDescription<CollectionT>[] | undefined;
    // (undocumented)
    createSchematic(name: string, allowPrivate?: boolean): Schematic<CollectionT, SchematicT>;
    // (undocumented)
    get description(): CollectionDescription<CollectionT>;
    // (undocumented)
    listSchematicNames(includeHidden?: boolean): string[];
    // (undocumented)
    get name(): string;
}

// @public (undocumented)
export function composeFileOperators(operators: FileOperator[]): FileOperator;

// @public (undocumented)
export class ContentHasMutatedException extends BaseException {
    constructor(path: string);
}

// @public (undocumented)
export function contentTemplate<T>(options: T): Rule;

// @public (undocumented)
export interface CreateFileAction extends ActionBase {
    // (undocumented)
    readonly content: Buffer;
    // (undocumented)
    readonly kind: 'c';
}

// @public (undocumented)
export class DelegateTree implements Tree_2 {
    constructor(_other: Tree_2);
    // (undocumented)
    get actions(): Action[];
    // (undocumented)
    apply(action: Action, strategy?: MergeStrategy): void;
    // (undocumented)
    beginUpdate(path: string): UpdateRecorder;
    // (undocumented)
    branch(): Tree_2;
    // (undocumented)
    commitUpdate(record: UpdateRecorder): void;
    // (undocumented)
    create(path: string, content: Buffer | string): void;
    // (undocumented)
    delete(path: string): void;
    // (undocumented)
    exists(path: string): boolean;
    // (undocumented)
    get(path: string): FileEntry | null;
    // (undocumented)
    getDir(path: string): DirEntry;
    // (undocumented)
    merge(other: Tree_2, strategy?: MergeStrategy): void;
    // (undocumented)
    protected _other: Tree_2;
    // (undocumented)
    overwrite(path: string, content: Buffer | string): void;
    // (undocumented)
    read(path: string): Buffer | null;
    // (undocumented)
    readJson(path: string): JsonValue;
    // (undocumented)
    readText(path: string): string;
    // (undocumented)
    rename(from: string, to: string): void;
    // (undocumented)
    get root(): DirEntry;
    // (undocumented)
    visit(visitor: FileVisitor): void;
}

// @public (undocumented)
export interface DeleteFileAction extends ActionBase {
    // (undocumented)
    readonly kind: 'd';
}

// @public (undocumented)
export interface DirEntry {
    // (undocumented)
    dir(name: PathFragment): DirEntry;
    // (undocumented)
    file(name: PathFragment): FileEntry | null;
    // (undocumented)
    readonly parent: DirEntry | null;
    // (undocumented)
    readonly path: Path;
    // (undocumented)
    readonly subdirs: PathFragment[];
    // (undocumented)
    readonly subfiles: PathFragment[];
    // (undocumented)
    visit(visitor: FileVisitor): void;
}

// @public (undocumented)
export interface DryRunCreateEvent {
    // (undocumented)
    content: Buffer;
    // (undocumented)
    kind: 'create';
    // (undocumented)
    path: string;
}

// @public (undocumented)
export interface DryRunDeleteEvent {
    // (undocumented)
    kind: 'delete';
    // (undocumented)
    path: string;
}

// @public (undocumented)
export interface DryRunErrorEvent {
    // (undocumented)
    description: 'alreadyExist' | 'doesNotExist';
    // (undocumented)
    kind: 'error';
    // (undocumented)
    path: string;
}

// @public (undocumented)
export type DryRunEvent = DryRunErrorEvent | DryRunDeleteEvent | DryRunCreateEvent | DryRunUpdateEvent | DryRunRenameEvent;

// @public (undocumented)
export interface DryRunRenameEvent {
    // (undocumented)
    kind: 'rename';
    // (undocumented)
    path: string;
    // (undocumented)
    to: string;
}

// @public (undocumented)
export class DryRunSink extends HostSink {
    constructor(host: virtualFs.Host, force?: boolean);
    // (undocumented)
    _done(): Observable<void>;
    // (undocumented)
    protected _fileAlreadyExistException(path: string): void;
    // (undocumented)
    protected _fileAlreadyExistExceptionSet: Set<string>;
    // (undocumented)
    protected _fileDoesNotExistException(path: string): void;
    // (undocumented)
    protected _fileDoesNotExistExceptionSet: Set<string>;
    // (undocumented)
    readonly reporter: Observable<DryRunEvent>;
    // (undocumented)
    protected _subject: Subject<DryRunEvent>;
}

// @public (undocumented)
export interface DryRunUpdateEvent {
    // (undocumented)
    content: Buffer;
    // (undocumented)
    kind: 'update';
    // (undocumented)
    path: string;
}

// @public
export function empty(): Source;

// @public (undocumented)
export class EmptyTree extends HostTree {
    constructor();
}

// @public
export interface Engine<CollectionMetadataT extends object, SchematicMetadataT extends object> {
    // (undocumented)
    createCollection(name: string, requester?: Collection<CollectionMetadataT, SchematicMetadataT>): Collection<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    createContext(schematic: Schematic<CollectionMetadataT, SchematicMetadataT>, parent?: Partial<TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>>, executionOptions?: Partial<ExecutionOptions>): TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    createSchematic(name: string, collection: Collection<CollectionMetadataT, SchematicMetadataT>): Schematic<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    createSourceFromUrl(url: Url, context: TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>): Source;
    // (undocumented)
    readonly defaultMergeStrategy: MergeStrategy;
    // (undocumented)
    executePostTasks(): Observable<void>;
    // (undocumented)
    transformOptions<OptionT extends object, ResultT extends object>(schematic: Schematic<CollectionMetadataT, SchematicMetadataT>, options: OptionT, context?: TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>): Observable<ResultT>;
    // (undocumented)
    readonly workflow: Workflow | null;
}

// @public
export interface EngineHost<CollectionMetadataT extends object, SchematicMetadataT extends object> {
    // (undocumented)
    createCollectionDescription(name: string, requester?: CollectionDescription<CollectionMetadataT>): CollectionDescription<CollectionMetadataT>;
    // (undocumented)
    createSchematicDescription(name: string, collection: CollectionDescription<CollectionMetadataT>): SchematicDescription<CollectionMetadataT, SchematicMetadataT> | null;
    // (undocumented)
    createSourceFromUrl(url: Url, context: TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>): Source | null;
    // (undocumented)
    createTaskExecutor(name: string): Observable<TaskExecutor>;
    // (undocumented)
    readonly defaultMergeStrategy?: MergeStrategy;
    // (undocumented)
    getSchematicRuleFactory<OptionT extends object>(schematic: SchematicDescription<CollectionMetadataT, SchematicMetadataT>, collection: CollectionDescription<CollectionMetadataT>): RuleFactory<OptionT>;
    // (undocumented)
    hasTaskExecutor(name: string): boolean;
    // (undocumented)
    listSchematicNames(collection: CollectionDescription<CollectionMetadataT>, includeHidden?: boolean): string[];
    // (undocumented)
    transformContext(context: TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>): TypedSchematicContext<CollectionMetadataT, SchematicMetadataT> | void;
    // (undocumented)
    transformOptions<OptionT extends object, ResultT extends object>(schematic: SchematicDescription<CollectionMetadataT, SchematicMetadataT>, options: OptionT, context?: TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>): Observable<ResultT>;
}

// @public (undocumented)
export interface ExecutionOptions {
    // (undocumented)
    interactive: boolean;
    // (undocumented)
    scope: string;
}

// @public
export function externalSchematic<OptionT extends object>(collectionName: string, schematicName: string, options: OptionT, executionOptions?: Partial<ExecutionOptions>): Rule;

// @public (undocumented)
export class FileAlreadyExistException extends BaseException {
    constructor(path: string);
}

// @public (undocumented)
export class FileDoesNotExistException extends BaseException {
    constructor(path: string);
}

// @public (undocumented)
export interface FileEntry {
    // (undocumented)
    readonly content: Buffer;
    // (undocumented)
    readonly path: Path;
}

// @public
export type FileOperator = (entry: FileEntry) => FileEntry | null;

// @public (undocumented)
export interface FilePredicate<T> {
    // (undocumented)
    (path: Path, entry?: Readonly<FileEntry> | null): T;
}

// @public (undocumented)
export type FileVisitor = FilePredicate<void>;

// @public (undocumented)
export const FileVisitorCancelToken: symbol;

// @public (undocumented)
export function filter(predicate: FilePredicate<boolean>): Rule;

// @public (undocumented)
export class FilterHostTree extends HostTree {
    constructor(tree: HostTree, filter?: FilePredicate<boolean>);
}

// @public (undocumented)
export function forEach(operator: FileOperator): Rule;

declare namespace formats {
    export {
        htmlSelectorFormat,
        pathFormat,
        standardFormats
    }
}
export { formats }

// @public (undocumented)
export class HostCreateTree extends HostTree {
    constructor(host: virtualFs.ReadonlyHost);
}

// @public (undocumented)
export class HostDirEntry implements DirEntry {
    constructor(parent: DirEntry | null, path: Path, _host: virtualFs.SyncDelegateHost, _tree: Tree_2);
    // (undocumented)
    dir(name: PathFragment): DirEntry;
    // (undocumented)
    file(name: PathFragment): FileEntry | null;
    // (undocumented)
    protected _host: virtualFs.SyncDelegateHost;
    // (undocumented)
    readonly parent: DirEntry | null;
    // (undocumented)
    readonly path: Path;
    // (undocumented)
    get subdirs(): PathFragment[];
    // (undocumented)
    get subfiles(): PathFragment[];
    // (undocumented)
    protected _tree: Tree_2;
    // (undocumented)
    visit(visitor: FileVisitor): void;
}

// @public (undocumented)
export class HostSink extends SimpleSinkBase {
    constructor(_host: virtualFs.Host, _force?: boolean);
    // (undocumented)
    protected _createFile(path: Path, content: Buffer): Observable<void>;
    // (undocumented)
    protected _deleteFile(path: Path): Observable<void>;
    // (undocumented)
    _done(): Observable<void>;
    // (undocumented)
    protected _filesToCreate: Map<Path, UpdateBufferBase>;
    // (undocumented)
    protected _filesToDelete: Set<Path>;
    // (undocumented)
    protected _filesToRename: Set<[Path, Path]>;
    // (undocumented)
    protected _filesToUpdate: Map<Path, UpdateBufferBase>;
    // (undocumented)
    protected _force: boolean;
    // (undocumented)
    protected _host: virtualFs.Host;
    // (undocumented)
    protected _overwriteFile(path: Path, content: Buffer): Observable<void>;
    // (undocumented)
    protected _renameFile(from: Path, to: Path): Observable<void>;
    // (undocumented)
    protected _validateCreateAction(action: CreateFileAction): Observable<void>;
    // (undocumented)
    protected _validateFileExists(p: Path): Observable<boolean>;
}

// @public (undocumented)
export class HostTree implements Tree_2 {
    constructor(_backend?: virtualFs.ReadonlyHost<{}>);
    // (undocumented)
    get actions(): Action[];
    // (undocumented)
    apply(action: Action, strategy?: MergeStrategy): void;
    // (undocumented)
    protected _backend: virtualFs.ReadonlyHost<{}>;
    // (undocumented)
    beginUpdate(path: string): UpdateRecorder;
    // (undocumented)
    branch(): Tree_2;
    // (undocumented)
    commitUpdate(record: UpdateRecorder): void;
    // (undocumented)
    create(path: string, content: Buffer | string): void;
    // (undocumented)
    delete(path: string): void;
    // (undocumented)
    exists(path: string): boolean;
    // (undocumented)
    get(path: string): FileEntry | null;
    // (undocumented)
    getDir(path: string): DirEntry;
    // (undocumented)
    static isHostTree(tree: Tree_2): tree is HostTree;
    // (undocumented)
    merge(other: Tree_2, strategy?: MergeStrategy): void;
    // (undocumented)
    protected _normalizePath(path: string): Path;
    // (undocumented)
    overwrite(path: string, content: Buffer | string): void;
    // (undocumented)
    read(path: string): Buffer | null;
    // (undocumented)
    readJson(path: string): JsonValue;
    // (undocumented)
    readText(path: string): string;
    // (undocumented)
    rename(from: string, to: string): void;
    // (undocumented)
    get root(): DirEntry;
    // (undocumented)
    visit(visitor: FileVisitor): void;
    // (undocumented)
    protected _willCreate(path: Path): boolean;
    // (undocumented)
    protected _willDelete(path: Path): boolean;
    // (undocumented)
    protected _willOverwrite(path: Path): boolean;
    // (undocumented)
    protected _willRename(path: Path): boolean;
}

// @public (undocumented)
const htmlSelectorFormat: schema.SchemaFormat;

// @public (undocumented)
export class InvalidPipeException extends BaseException {
    constructor(name: string);
}

// @public
export class InvalidRuleResultException extends BaseException {
    constructor(value?: {});
}

// @public (undocumented)
export class InvalidSchematicsNameException extends BaseException {
    constructor(name: string);
}

// @public (undocumented)
export class InvalidSourceResultException extends BaseException {
    constructor(value?: {});
}

// @public (undocumented)
export class InvalidUpdateRecordException extends BaseException {
    constructor();
}

// @public (undocumented)
export function isContentAction(action: Action): action is CreateFileAction | OverwriteFileAction;

// @public (undocumented)
interface LifeCycleEvent {
    // (undocumented)
    kind: 'start' | 'end' | 'workflow-start' | 'workflow-end' | 'post-tasks-start' | 'post-tasks-end';
}

// @public (undocumented)
export class MergeConflictException extends BaseException {
    constructor(path: string);
}

// @public (undocumented)
export enum MergeStrategy {
    // (undocumented)
    AllowCreationConflict = 4,
    // (undocumented)
    AllowDeleteConflict = 8,
    // (undocumented)
    AllowOverwriteConflict = 2,
    // (undocumented)
    ContentOnly = 2,
    // (undocumented)
    Default = 0,
    // (undocumented)
    Error = 1,
    // (undocumented)
    Overwrite = 14
}

// @public
export function mergeWith(source: Source, strategy?: MergeStrategy): Rule;

// @public (undocumented)
export function move(from: string, to?: string): Rule;

// @public (undocumented)
export function noop(): Rule;

// @public (undocumented)
export class OptionIsNotDefinedException extends BaseException {
    constructor(name: string);
}

// @public (undocumented)
export interface OverwriteFileAction extends ActionBase {
    // (undocumented)
    readonly content: Buffer;
    // (undocumented)
    readonly kind: 'o';
}

// @public (undocumented)
export function partitionApplyMerge(predicate: FilePredicate<boolean>, ruleYes: Rule, ruleNo?: Rule): Rule;

// @public (undocumented)
const pathFormat: schema.SchemaFormat;

// @public (undocumented)
export function pathTemplate<T extends PathTemplateData>(options: T): Rule;

// @public (undocumented)
export type PathTemplateData = {
    [key: string]: PathTemplateValue | PathTemplateData | PathTemplatePipeFunction;
};

// @public (undocumented)
export interface PathTemplateOptions {
    // (undocumented)
    interpolationEnd: string;
    // (undocumented)
    interpolationStart: string;
    // (undocumented)
    pipeSeparator?: string;
}

// @public (undocumented)
export type PathTemplatePipeFunction = (x: string) => PathTemplateValue;

// @public (undocumented)
export type PathTemplateValue = boolean | string | number | undefined;

// @public (undocumented)
export class PrivateSchematicException extends BaseException {
    constructor(name: string, collection: CollectionDescription<{}>);
}

// @public (undocumented)
export interface RandomOptions {
    // (undocumented)
    multi?: boolean | number;
    // (undocumented)
    multiFiles?: boolean | number;
    // (undocumented)
    root?: string;
}

// @public (undocumented)
export interface RenameFileAction extends ActionBase {
    // (undocumented)
    readonly kind: 'r';
    // (undocumented)
    readonly to: Path;
}

// @public
export function renameTemplateFiles(): Rule;

// @public (undocumented)
interface RequiredWorkflowExecutionContext {
    // (undocumented)
    collection: string;
    // (undocumented)
    options: object;
    // (undocumented)
    schematic: string;
}

// @public (undocumented)
export type Rule = (tree: Tree_2, context: SchematicContext) => Tree_2 | Observable<Tree_2> | Rule | Promise<void | Rule> | void;

// @public
export type RuleFactory<T extends object> = (options: T) => Rule;

// @public
export interface Schematic<CollectionMetadataT extends object, SchematicMetadataT extends object> {
    // (undocumented)
    call<OptionT extends object>(options: OptionT, host: Observable<Tree_2>, parentContext?: Partial<TypedSchematicContext<CollectionMetadataT, SchematicMetadataT>>, executionOptions?: Partial<ExecutionOptions>): Observable<Tree_2>;
    // (undocumented)
    readonly collection: Collection<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    readonly description: SchematicDescription<CollectionMetadataT, SchematicMetadataT>;
}

// @public
export function schematic<OptionT extends object>(schematicName: string, options: OptionT, executionOptions?: Partial<ExecutionOptions>): Rule;

// @public
export type SchematicContext = TypedSchematicContext<{}, {}>;

// @public
export type SchematicDescription<CollectionMetadataT extends object, SchematicMetadataT extends object> = SchematicMetadataT & {
    readonly collection: CollectionDescription<CollectionMetadataT>;
    readonly name: string;
    readonly private?: boolean;
    readonly hidden?: boolean;
};

// @public (undocumented)
export class SchematicEngine<CollectionT extends object, SchematicT extends object> implements Engine<CollectionT, SchematicT> {
    constructor(_host: EngineHost<CollectionT, SchematicT>, _workflow?: Workflow | undefined);
    // (undocumented)
    createCollection(name: string, requester?: Collection<CollectionT, SchematicT>): Collection<CollectionT, SchematicT>;
    // (undocumented)
    createContext(schematic: Schematic<CollectionT, SchematicT>, parent?: Partial<TypedSchematicContext<CollectionT, SchematicT>>, executionOptions?: Partial<ExecutionOptions>): TypedSchematicContext<CollectionT, SchematicT>;
    // (undocumented)
    createSchematic(name: string, collection: Collection<CollectionT, SchematicT>, allowPrivate?: boolean): Schematic<CollectionT, SchematicT>;
    // (undocumented)
    createSourceFromUrl(url: Url, context: TypedSchematicContext<CollectionT, SchematicT>): Source;
    // (undocumented)
    get defaultMergeStrategy(): MergeStrategy;
    // (undocumented)
    executePostTasks(): Observable<void>;
    // (undocumented)
    listSchematicNames(collection: Collection<CollectionT, SchematicT>, includeHidden?: boolean): string[];
    // (undocumented)
    transformOptions<OptionT extends object, ResultT extends object>(schematic: Schematic<CollectionT, SchematicT>, options: OptionT, context?: TypedSchematicContext<CollectionT, SchematicT>): Observable<ResultT>;
    // (undocumented)
    get workflow(): Workflow | null;
    // (undocumented)
    protected _workflow?: Workflow | undefined;
}

// @public (undocumented)
export class SchematicEngineConflictingException extends BaseException {
    constructor();
}

// @public (undocumented)
export class SchematicImpl<CollectionT extends object, SchematicT extends object> implements Schematic<CollectionT, SchematicT> {
    constructor(_description: SchematicDescription<CollectionT, SchematicT>, _factory: RuleFactory<{}>, _collection: Collection<CollectionT, SchematicT>, _engine: Engine<CollectionT, SchematicT>);
    // (undocumented)
    call<OptionT extends object>(options: OptionT, host: Observable<Tree_2>, parentContext?: Partial<TypedSchematicContext<CollectionT, SchematicT>>, executionOptions?: Partial<ExecutionOptions>): Observable<Tree_2>;
    // (undocumented)
    get collection(): Collection<CollectionT, SchematicT>;
    // (undocumented)
    get description(): SchematicDescription<CollectionT, SchematicT>;
}

// @public (undocumented)
export class SchematicsException extends BaseException {
}

// @public (undocumented)
export abstract class SimpleSinkBase implements Sink {
    // (undocumented)
    commit(tree: Tree_2): Observable<void>;
    // (undocumented)
    commitSingleAction(action: Action): Observable<void>;
    // (undocumented)
    protected abstract _createFile(path: string, content: Buffer): Observable<void>;
    // (undocumented)
    protected abstract _deleteFile(path: string): Observable<void>;
    // (undocumented)
    protected abstract _done(): Observable<void>;
    // (undocumented)
    protected _fileAlreadyExistException(path: string): void;
    // (undocumented)
    protected _fileDoesNotExistException(path: string): void;
    // (undocumented)
    protected abstract _overwriteFile(path: string, content: Buffer): Observable<void>;
    // (undocumented)
    postCommit: () => void | Observable<void>;
    // (undocumented)
    postCommitAction: (action: Action) => void | Observable<void>;
    // (undocumented)
    preCommit: () => void | Observable<void>;
    // (undocumented)
    preCommitAction: (action: Action) => void | Action | PromiseLike<Action> | Observable<Action>;
    // (undocumented)
    protected abstract _renameFile(path: string, to: string): Observable<void>;
    // (undocumented)
    protected _validateCreateAction(action: CreateFileAction): Observable<void>;
    // (undocumented)
    protected _validateDeleteAction(action: DeleteFileAction): Observable<void>;
    // (undocumented)
    protected abstract _validateFileExists(p: string): Observable<boolean>;
    // (undocumented)
    protected _validateOverwriteAction(action: OverwriteFileAction): Observable<void>;
    // (undocumented)
    protected _validateRenameAction(action: RenameFileAction): Observable<void>;
    // (undocumented)
    validateSingleAction(action: Action): Observable<void>;
}

// @public (undocumented)
export interface Sink {
    // (undocumented)
    commit(tree: Tree_2): Observable<void>;
}

// @public
export type Source = (context: SchematicContext) => Tree_2 | Observable<Tree_2>;

// @public
export function source(tree: Tree_2): Source;

// @public (undocumented)
const standardFormats: schema.SchemaFormat[];

export { strings }

// @public (undocumented)
export interface TaskConfiguration<T = {}> {
    // (undocumented)
    dependencies?: Array<TaskId>;
    // (undocumented)
    name: string;
    // (undocumented)
    options?: T;
}

// @public (undocumented)
export interface TaskConfigurationGenerator<T = {}> {
    // (undocumented)
    toConfiguration(): TaskConfiguration<T>;
}

// @public (undocumented)
export type TaskExecutor<T = {}> = (options: T | undefined, context: SchematicContext) => Promise<void> | Observable<void>;

// @public (undocumented)
export interface TaskExecutorFactory<T> {
    // (undocumented)
    create(options?: T): Promise<TaskExecutor> | Observable<TaskExecutor>;
    // (undocumented)
    readonly name: string;
}

// @public (undocumented)
export interface TaskId {
    // (undocumented)
    readonly id: number;
}

// @public (undocumented)
export interface TaskInfo {
    // (undocumented)
    readonly configuration: TaskConfiguration;
    // (undocumented)
    readonly context: SchematicContext;
    // (undocumented)
    readonly id: number;
    // (undocumented)
    readonly priority: number;
}

// @public (undocumented)
export class TaskScheduler {
    constructor(_context: SchematicContext);
    // (undocumented)
    finalize(): ReadonlyArray<TaskInfo>;
    // (undocumented)
    schedule<T extends object>(taskConfiguration: TaskConfiguration<T>): TaskId;
}

// @public (undocumented)
export function template<T extends object>(options: T): Rule;

// @public (undocumented)
export const TEMPLATE_FILENAME_RE: RegExp;

// @public (undocumented)
export type Tree = Tree_2;

// @public (undocumented)
export const Tree: TreeConstructor;

// @public (undocumented)
export interface TreeConstructor {
    // (undocumented)
    branch(tree: Tree_2): Tree_2;
    // (undocumented)
    empty(): Tree_2;
    // (undocumented)
    merge(tree: Tree_2, other: Tree_2, strategy?: MergeStrategy): Tree_2;
    // (undocumented)
    optimize(tree: Tree_2): Tree_2;
    // (undocumented)
    partition(tree: Tree_2, predicate: FilePredicate<boolean>): [Tree_2, Tree_2];
}

// @public (undocumented)
export const TreeSymbol: symbol;

// @public
export interface TypedSchematicContext<CollectionMetadataT extends object, SchematicMetadataT extends object> {
    // (undocumented)
    addTask<T extends object>(task: TaskConfigurationGenerator<T>, dependencies?: Array<TaskId>): TaskId;
    // (undocumented)
    readonly debug: boolean;
    // (undocumented)
    readonly engine: Engine<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    readonly interactive: boolean;
    // (undocumented)
    readonly logger: logging.LoggerApi;
    // (undocumented)
    readonly schematic: Schematic<CollectionMetadataT, SchematicMetadataT>;
    // (undocumented)
    readonly strategy: MergeStrategy;
}

// @public (undocumented)
export class UnimplementedException extends BaseException {
    constructor();
}

// @public (undocumented)
export class UnknownActionException extends BaseException {
    constructor(action: Action);
}

// @public (undocumented)
export class UnknownCollectionException extends BaseException {
    constructor(name: string);
}

// @public (undocumented)
export class UnknownPipeException extends BaseException {
    constructor(name: string);
}

// @public (undocumented)
export class UnknownSchematicException extends BaseException {
    constructor(name: string, collection: CollectionDescription<{}>);
}

// @public (undocumented)
export class UnknownTaskDependencyException extends BaseException {
    constructor(id: TaskId);
}

// @public (undocumented)
export class UnknownUrlSourceProtocol extends BaseException {
    constructor(url: string);
}

// @public (undocumented)
export class UnregisteredTaskException extends BaseException {
    constructor(name: string, schematic?: SchematicDescription<{}, {}>);
}

// @public (undocumented)
export class UnsuccessfulWorkflowExecution extends BaseException {
    constructor();
}

// @public (undocumented)
export interface UpdateRecorder {
    // (undocumented)
    insertLeft(index: number, content: Buffer | string): UpdateRecorder;
    // (undocumented)
    insertRight(index: number, content: Buffer | string): UpdateRecorder;
    // (undocumented)
    remove(index: number, length: number): UpdateRecorder;
}

// @public (undocumented)
export function url(urlString: string): Source;

// @public (undocumented)
export function when(predicate: FilePredicate<boolean>, operator: FileOperator): FileOperator;

// @public (undocumented)
interface Workflow {
    // (undocumented)
    readonly context: Readonly<WorkflowExecutionContext>;
    // (undocumented)
    execute(options: Partial<WorkflowExecutionContext> & RequiredWorkflowExecutionContext): Observable<void>;
}

declare namespace workflow {
    export {
        BaseWorkflowOptions,
        BaseWorkflow,
        RequiredWorkflowExecutionContext,
        WorkflowExecutionContext,
        LifeCycleEvent,
        Workflow
    }
}
export { workflow }

// @public (undocumented)
interface WorkflowExecutionContext extends RequiredWorkflowExecutionContext {
    // (undocumented)
    allowPrivate?: boolean;
    // (undocumented)
    debug: boolean;
    // (undocumented)
    logger: logging.Logger;
    // (undocumented)
    parentContext?: Readonly<WorkflowExecutionContext>;
}

// (No @packageDocumentation comment for this package)

```