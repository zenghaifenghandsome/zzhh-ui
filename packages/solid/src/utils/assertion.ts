export const __DEV__ = process.env.NODE_ENV !== "production";

export function isNumber(value:any): value is number {
    return typeof value === "number";
}

export function isArray<T>(value:any) :value is Array<T>{
    return Array.isArray(value);
}

export function isObject(value:any): value is Record<string,any>{
    const type = typeof value;
    return value != null && (type === "object" || type === "function") && !isArray(value);
}

export function isFunction<T extends Function = Function>(value:any): value is T{
    return typeof value === "function";
}