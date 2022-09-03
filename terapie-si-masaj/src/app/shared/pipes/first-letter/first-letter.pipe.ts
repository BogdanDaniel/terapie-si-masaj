import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstLetter' })
export class FirstLetterPipe implements PipeTransform {
    transform(value: string | undefined, ...args: any[]) {
        return value?.charAt(0) || '';
    }
}