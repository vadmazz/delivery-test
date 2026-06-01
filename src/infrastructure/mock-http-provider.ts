import {HttpProvider} from "../application";

export class MockHttpProvider implements HttpProvider {
    get<T>(endpoint: string): Promise<T> {
        return Promise.resolve(undefined as T);
    }

    post<TPayload, TResponse>(endpoint: string, payload: TPayload): Promise<TResponse> {
        return Promise.resolve(undefined as TResponse);
    }
}