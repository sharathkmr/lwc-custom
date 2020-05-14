import { LightningElement, api } from 'lwc';

export default class CustomToast extends LightningElement {
    @api options; // type: Object - {autoClose: true|false, autoCloseTime: Number} | Optional
    @api variant; // variant type - error, success, warning
    @api message; // toast message
    @api title; // toast title
    autoClose = false;
    autoCloseConfigured = false;
    autoCloseTime = 5000;

    connectedCallback() {
        if(this.options && this.options.autoCloseTime) {
            this.autoCloseTime = this.options.autoCloseTime;
        }
        if(this.options && this.options.autoClose) {
            this.autoClose = this.options.autoClose;
        }
    }

    renderedCallback() {
        if (!this.autoCloseConfigured && this.autoClose) {
            this.delayTimeout = setTimeout(() => {
                const toastCustom = this.template.querySelector('[data-id="toastCustom"]');
                toastCustom.className = 'slds-hide';
            }, this.autoCloseTime);
            console.log('autoclose configured ', this.autoCloseTime);
            this.autoCloseConfigured = true;
        }
    }

    close() {
        const toastCustom = this.template.querySelector('[data-id="toastCustom"]');
        toastCustom.className = 'slds-hide';
    }

    get mainClass() { 
        return 'slds-notify slds-notify_toast slds-theme_'+this.variant+' notify_toast-custom';
    }

    get messageClass() { 
        return 'slds-icon_container slds-icon-utility-'+this.variant+' slds-icon-utility-success slds-m-right_small slds-no-flex slds-align-top';
    }
    
    get iconName() {
        return 'utility:'+this.variant;
    }
}