// Не полная и не продуманная реализация, нужна чтобы показать абстракцию над infra
export interface HttpProvider {
    get<T>(endpoint: string): Promise<T>;
    post<TPayload, TResponse>(endpoint: string, payload: TPayload): Promise<TResponse>;
}