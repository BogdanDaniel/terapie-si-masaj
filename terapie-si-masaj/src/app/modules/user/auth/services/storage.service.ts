import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }


    setItem(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    removeItem(key: string) {
        localStorage.removeItem(key,);
    }
}