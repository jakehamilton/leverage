import { Emitter, EventType, Handler, WildcardHandler } from "mitt";

export declare const HOOKS_DATA = "__hooks_data__";

export type UnitIs = "plugin" | "component" | "service";

export interface Manager {
    emitter: Emitter;

    on: typeof on;
    off: typeof off;
    once: typeof once;
    emit: typeof emit;

    services: {
        installed: Map<string, Unit<"service", string>>;
        waiting: Map<string, Unit<"service", string>>;
    };

    plugins: {
        installed: Map<string, Unit<"plugin", string>>;
        waiting: Map<string, Unit<"plugin", string>>;
    };

    components: {
        installed: Map<string, Set<Unit<"component", string>>>;
        waiting: Map<string, Set<Unit<"component", string>>>;
    };

    /**
     * Get a service given its type.
     */
    getService<Type extends string>(type: Type): Unit<"service", Type>;

    /**
     * Get a plugin given its type.
     */
    getPlugin<Type extends string>(type: Type): Unit<"plugin", Type>;

    /**
     * Initialize a unit.
     */
    init<Is extends UnitIs, Type extends string>(unit: Unit<Is, Type>): void;

    /**
     * Validate a unit's config.
     */
    validate<Is extends UnitIs, Type extends string>(
        unit: Unit<Is, Type>
    ): void;

    /**
     * Add units to Leverage.
     */
    add(...units: Array<Unit<UnitIs, string>>): void;

    /**
     * Remove units from Leverage.
     */
    remove(...units: Array<Unit<UnitIs, string>>): void;

    /**
     * Remove **all** units from Leverage and reset the manager
     *  to its initial state.
     */
    reset(): void;
}

export class Manager implements Manager {}

export interface UnitDependencies {
    plugins: Array<string>;
    services: Array<string>;
}

export type UnitInit = () => void;

export interface UnitConfig<Is extends UnitIs, Type extends string> {
    is: Is;
    type: Type;
    dependencies: UnitDependencies;
    [key: string]: any;
}

export interface HooksData<Is extends UnitIs, Type extends string> {
    manager: Manager;
    config: UnitConfig<Is, Type>;
    installed: boolean;
    initialized: boolean;
    stateSlots: Map<number, any>;
    currentStateSlot: number;
    refSlots: Map<number, any>;
    currentRefSlot: number;
    keyRefs: Map<string, any>;
    effectSlots: Map<number, any>;
    currentEffectSlot: number;
    installEffects: Array<any>;
    installEffectCleanups: Array<any>;
}

export interface Unit<Is extends UnitIs, Type extends string> {
    init: UnitInit;
    [key: string]: any;
}

export interface InitializedUnit<Is extends UnitIs, Type extends string>
    extends Unit<Is, Type> {
    [HOOKS_DATA]: HooksData<Is, Type>;
}

export interface Plugin<Type extends string> extends Unit<"plugin", Type> {
    install?: (unit: InitializedUnit<"component", Type>) => void;
}

export type Component<Type extends string> = Unit<"component", Type>;
export type Service<Type extends string> = Unit<"service", Type>;

export type HookDependencyArray = Array<any>;

export type EffectCleanupCallback = () => void;

export type EffectCallback = (() => void) | (() => EffectCleanupCallback);

export interface Ref<T> {
    current: T;
}

export interface SignalTarget {
    is: UnitIs;
    type: string;
}

export type SetStateCallback<T> = (newValue: T) => void;

export function useConfig(): UnitConfig<UnitIs, string>;
export function useConfig<TargetUnit extends InitializedUnit<UnitIs, string>>(
    unit: TargetUnit
): TargetUnit["__hooks_data__"]["config"];
export function useConfig<
    Is extends UnitIs,
    Type extends string,
    Config = UnitConfig<Is, Type>
>(config: Partial<Config>): Config;

export function useDependencies(): UnitDependencies;
export function useDependencies(
    dependencies: Partial<UnitDependencies>
): UnitDependencies;
export function useDependencies(Unit): UnitDependencies;

export function useEffect(callback: EffectCallback): void;
export function useEffect(
    callback: EffectCallback,
    dependencies: HookDependencyArray
): void;

export type WithHooks = (fn: (...args: Array<any>) => void) => void;

export function useHooks(): WithHooks;

export function useInstallEffect(callback: EffectCallback): void;

export function useIs(): UnitIs;
export function useIs(is: UnitIs): UnitIs;
export function useIs<Is extends UnitIs>(unit: Unit<Is, any>): Is;

export function useKeyRef<T>(key: string): Ref<T>;
export function useKeyRef<T>(key: string, initialValue: T): Ref<T>;

export function usePlugin<Type extends string>(type: Type): Plugin<Type>;

export function useRef<T>(initialValue: T): Ref<T>;

export function useService<Type extends string>(type: Type): Service<Type>;

export type EventHandler<Payload = any> = (payload?: Payload) => void;
export type WildCardEventHandler = EventHandler<any>;

export type Unsubscribe<T extends EventType = ""> = () => void;

export function useEvent<Event extends EventType, Payload = any>(
    event: Event,
    handler: Handler<Payload>
): Unsubscribe<Event>;
export function useEvent(
    event: "*",
    handler: WildcardHandler
): Unsubscribe<"*">;

export function useEmitter(): EventEmitter;

export function useState<T>(initialValue: T): [T, SetStateCallback<T>];

export function useType(): string;
export function useType(type: string): string;
export function useType<Type extends string>(unit: Unit<UnitIs, Type>): Type;

export function useUnit<Is extends UnitIs, Type extends string>(): Unit<
    Is,
    Type
>;

export const add: Manager["add"];
export const remove: Manager["remove"];
export const reset: Manager["reset"];

export function on<Payload = any>(
    event: EventType,
    handler: EventHandler<Payload>
): void;
export function on(event: "*", handler: WildCardEventHandler): void;

export function off<Payload = any>(
    event: EventType,
    handler: EventHandler<Payload>
): void;
export function off(event: "*", handler: WildCardEventHandler): void;

export function once(event: EventType, handler: EventHandler<any>): void;

export function emit<Payload = any>(event: EventType, payload?: Payload): void;

interface EventEmitter {
    all: Emitter["all"];
    on: typeof on;
    off: typeof off;
    emit: typeof emit;
    once: typeof once;
}

export const emitter: EventEmitter;
