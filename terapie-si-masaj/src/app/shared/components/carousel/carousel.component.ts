import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
    certifications: any[];
    showCertifications: any[] = [];
    isSmDevice: boolean = false;

    @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
        if (!this.isSmDevice) {
            this.doDown(event);
        }
    }

    @HostListener('mouseup', ['$event']) onMouseUp(event: any) {
        if (!this.isSmDevice) {
            this.doUp(event);
        }

    }
    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isSmDevice = window.innerWidth < 576;
    }
    state = { downX: 0 };
    selected: any;

    constructor() {
        this.certifications = [
            {
                name: 'Tehnician Maseur',
                image: 'tehnician_maseur'
            },
            {
                name: 'Anticelulitic',
                image: 'anticelulitic'
            },
            {
                name: 'Masaj Terapeutic',
                image: 'masaj_terapeutic'
            },
            {
                name: 'Masaj Reflexogen',
                image: 'masaj_reflexogen'
            },
            {
                name: 'Drenaj Limfatic',
                image: 'drenaj_limfatic'
            },
            {
                name: 'Masaj Somatic',
                image: 'masaj_somatic'
            }
        ];
        this.showLess();
    }

    showMore() {
        this.showCertifications = this.certifications;
    }

    showLess() {
        this.showCertifications = [this.certifications[0]];
    }


    ngAfterViewInit(): void {
        this.isSmDevice = window.innerWidth < 576;
        this.selected = $(".selected")[0];
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
        let tgt = e.target;
        if (tgt?.parentElement) {
            while (!tgt?.parentElement?.classList?.contains('carousel')) {
                tgt = tgt?.parentElement;
            }

            this.move(tgt);
        }


    }
    // previous(e: any) {
    //     this.move('prev');
    // }
    // next(e: any) {
    //     this.move('next');
    // }
    doDown(e: any) {
        this.state.downX = e.x;
    }
    doUp(e: any) {
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
            selected = (el == "next") ? $(".selected")[0].nextElementSibling : $(".selected")[0].previousElementSibling;
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
