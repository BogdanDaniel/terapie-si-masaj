import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilityService {
    scroll(id: string) {
        if (document) {
            const element = document.querySelector('#' + id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: 'start' });
            }
        }
    }

    hasElementById(id: string): boolean {
        return !!document.querySelector('#' + id);

    }
}