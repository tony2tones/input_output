import { Observable } from "rxjs";
import { data } from "./mocks";

export class MockApiService {
    public health() {
        return new Observable((subscriber) => {
            subscriber.next({});
        });
    }
    public getData() {
        return new Observable((subscriber) => {
            subscriber.next(data);
        });
    }
}