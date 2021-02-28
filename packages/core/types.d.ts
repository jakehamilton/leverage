import { HOOKS_DATA } from "./src/util/symbols";

export type UnitIs = "plugin" | "component" | "service";

export interface UnitDependencies {
    plugins: Array<string>;
    services: Array<string>;
}

export type UnitInit = () => void;

export interface UnitConfig {
    is: UnitIs;
    type: string;
    dependencies: UnitDependencies;
    [key: string]: any;
}

export interface Unit {
    init: UnitInit;
    [key: string]: any;
}

export type Plugin = Unit;
export type Component = Unit;
export type Service = Unit;

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

export type SignalHandler<T> = (message: T) => void;

export type SetStateCallback<T> = (newValue: T) => void;

export function useConfig(): UnitConfig;
export function useConfig(config: Partial<UnitConfig>): UnitConfig;
export function useConfig(Unit): UnitConfig;

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

export function useInstallEffect(callback: EffectCallback): void;

export function useIs(): UnitIs;
export function useIs(is: UnitIs): UnitIs;
export function useIs(unit: Unit): UnitIs;

export function useKeyRef<T>(key: string): Ref<T>;
export function useKeyRef<T>(key: string, initialValue: T): Ref<T>;

export function usePlugin(type: string): Plugin;

export function useRef<T>(initialValue: T): Ref<T>;

export function useService(type: string): Service;

export function useSignal<T>(handler: SignalHandler<T>);

export function useState<T>(initialValue: T): [T, SetStateCallback<T>];

export function useType(): string;
export function useType(type: string): string;
export function useType(unit: Unit): string;
