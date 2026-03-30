export interface Header {
    key: string;
    value: string;
}
export interface RequestOptions {
    headers?: Header[];
    async?: boolean;
}
export declare class RD {
    private baseXhr;
    all(promises: Promise<unknown>[], success: (value: unknown) => unknown, fail?: (reason: unknown) => unknown): Promise<unknown>;
    trace(promises: Promise<unknown>[], success: (value: unknown) => unknown, fail?: (reason: unknown) => unknown): Promise<unknown>;
    get(url: string, params?: unknown, options?: RequestOptions): Promise<unknown>;
    post(url: string, params?: unknown, options?: RequestOptions): Promise<unknown>;
    put(url: string, params?: unknown, options?: RequestOptions): Promise<unknown>;
    delete(url: string, params?: unknown, options?: RequestOptions): Promise<unknown>;
}
declare const RDJs: RD;
export { RDJs };
//# sourceMappingURL=RDJs.d.ts.map