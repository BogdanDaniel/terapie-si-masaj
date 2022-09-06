import { Pipe, PipeTransform } from '@angular/core';
import { Massage } from '../../models/massage.model';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
    transform(value: Massage | undefined, duration: number) {
        return value?.pricing.find(pricing => pricing?.duration === duration)?.price;
    }
}