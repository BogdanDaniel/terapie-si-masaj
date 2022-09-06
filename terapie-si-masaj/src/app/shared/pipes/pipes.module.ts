import { NgModule } from '@angular/core';

import { FirstLetterPipe } from './first-letter/first-letter.pipe';
import { PricePipe } from './price/price.pipe';


@NgModule({
    declarations: [
        FirstLetterPipe,
        PricePipe
    ],
    exports: [
        FirstLetterPipe,
        PricePipe
    ]

})
export class PipesModule { }
