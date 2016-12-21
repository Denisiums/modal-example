import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
    selector: 'modal-example',
    template: require('./modal-example.html'),
    providers: []
})
export class ModalExampleComponent implements OnInit, OnDestroy {
    @Output() onSubmit = new EventEmitter<any>();
    @Output() onCancel = new EventEmitter<any>();
    private exampleData: any = null;
    private isOpen: boolean = false;
    @ViewChild('modal') modal: any;

    constructor() {
    }

    ngOnInit() {
        console.log('modal init');
    }

    ngOnDestroy() {
        console.log('modal destroy');
    }

    open() {
        console.log('open?');
        if (!this.isOpen) {
            console.log('open!');
            this.modal.open();
        }
    }

    submit() {
        console.log('submit!', this.exampleData);
        this.onSubmit.emit(this.exampleData);
        this.modal.close();
    }

    cancel() {
        console.log('cancelled!', this.exampleData);
        this.onCancel.emit();
        this.modal.close();
    }

    onOpen() {
        console.log('on Open');
        this.isOpen = true;
    }

    onClose() {
        console.log('on Close');
        this.isOpen = false;
    }

}
