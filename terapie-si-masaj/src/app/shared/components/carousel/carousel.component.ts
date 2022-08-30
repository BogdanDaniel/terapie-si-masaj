import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {


    @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
        this.doDown(event);
    }

    @HostListener('mouseup', ['$event']) onMouseUp() {
        this.doUp(event);

    }

    state = { downX: 0 };
    selected: any;

    constructor() {

    }

    ngAfterViewInit(): void {
        this.selected = $(".selected")[0];
        console.log(this.selected, 'se');
        this.reorder();

    }
    nextAll(el: any) {
        let els = [];

        if (el) {
            while (el = el.nextElementSibling) { els.push(el); }
        }

        return els;

    }

    prevAll(el: any) {
        let els = [];

        if (el) {
            while (el = el.previousElementSibling) { els.push(el); }
        }


        return els;
    }

    // keypress(e: any) {
    //     switch (e.which) {
    //         case 37: // left
    //             this.move('prev');
    //             break;

    //         case 39: // right
    //             this.move('next');
    //             break;

    //         default:
    //             return;
    //     }
    //     e.preventDefault();
    //     return false;
    // }
    select(e: any) {
        console.log(`select: ${e}`);
        let tgt = e.target;
        while (!tgt.parentElement.classList.contains('carousel')) {
            tgt = tgt.parentElement;
        }

        this.move(tgt);

    }
    // previous(e: any) {
    //     this.move('prev');
    // }
    // next(e: any) {
    //     this.move('next');
    // }
    doDown(e: any) {
        console.log(`down: ${e.x}`);
        this.state.downX = e.x;
    }
    doUp(e: any) {
        console.log(`up: ${e.x}`);
        let direction = 0,
            velocity = 0;

        if (this.state?.downX) {
            direction = (this.state.downX > e.x) ? -1 : 1;
            velocity = this.state.downX - e.x;

            if (Math.abs(this.state.downX - e.x) < 10) {
                this.select(e);
                return false;
            }
            if (direction === -1) {
                this.move('next');
            } else {
                this.move('prev');
            }
            this.state.downX = 0;
        }
        return;
    }

    move(el: any) {
        let selected = el;

        if (typeof el === "string") {
            console.log(`got string: ${el}`);
            selected = (el == "next") ? $(".selected")[0].nextElementSibling : $(".selected")[0].previousElementSibling;
            console.dir(selected);
        }

        let curpos = parseInt(this.selected.dataset.pos);
        let tgtpos = parseInt(selected.dataset.pos);

        let cnt = curpos - tgtpos;
        let dir = (cnt < 0) ? -1 : 1;
        let shift = Math.abs(cnt);

        for (let i = 0; i < shift; i++) {
            let el: any = (dir == -1) ? $("#carousel")[0].firstElementChild : $("#carousel")[0].lastElementChild;

            if (dir == -1) {
                el.dataset.pos = $("#carousel").children.length;
                $('#carousel').append(el);
            } else {
                el.dataset.pos = 0;
                $('#carousel').prepend(el);
            }

            this.reorder();
        }


        this.selected = selected;
        let next = selected.nextElementSibling;// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
        var prev = selected.previousElementSibling; // ? selected.previousElementSibling : selected.parentElement.lastElementChild;
        var prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild;
        var nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;

        selected.className = '';
        selected.classList.add("selected");

        this.removeClass(prev).classList.add('prev');
        this.removeClass(next).classList.add('next');

        this.removeClass(nextSecond).classList.add("nextRightSecond");
        this.removeClass(prevSecond).classList.add("prevLeftSecond");

        this.nextAll(nextSecond).forEach(item => { item.className = ''; item.classList.add('hideRight') });
        this.prevAll(prevSecond).forEach(item => { item.className = ''; item.classList.add('hideLeft') });

    }

    reorder() {
        let childcnt = $("#carousel").children().length;
        let childs = $("#carousel").children();
        console.log(childs, 'childs')

        for (let j = 0; j < childcnt; j++) {
            childs[j].dataset['pos'] = `${j}`;
        }
    }

    removeClass(el: any, classname: string = '') {
        if (el) {
            if (classname === '') {
                el.className = '';
            } else {
                el.classList.remove(classname);
            }
            return el;
        }
        return;
    }

}
