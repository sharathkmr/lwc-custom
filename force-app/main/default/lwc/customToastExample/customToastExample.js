import { LightningElement } from 'lwc';

export default class CustomToastExample extends LightningElement {
    toastError = {};
    toastWarning = {};
    toastSuccess = {};

    constructor() {
        super();

        this.toastError.variant = 'error';
        this.toastError.message = 'Test Error Message';
        this.toastError.title = 'Test Error Title';

        this.toastWarning.variant = 'warning';
        this.toastWarning.message = 'Test Warning Message';
        this.toastWarning.title = 'Test Warning Title';
        this.toastWarning.options = {autoClose: true};

        this.toastSuccess.variant = 'success';
        this.toastSuccess.message = 'Test Success Message';
        this.toastSuccess.title = 'Test Success Title';
        this.toastSuccess.options = {autoClose: true, autoCloseTime: 10000};
    }
}