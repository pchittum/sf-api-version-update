import { LightningElement, wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from "lightning/navigation";

export default class PostMessageLWC extends NavigationMixin(LightningElement) {

    @wire(CurrentPageReference)
    pageRef;

    currentUrl;

    message = '';
    lightningHost = 'https://blixtar-dev-ed.lightning.force.com';
    vfHost = 'https://blixtar-dev-ed--c.visualforce.com';
    pageUrl;
    
    connectedCallback(event){
        // console.log(this.pageRef);
        // console.log(this.pageRef.type);
        // console.dir(this.pageRef.attributes);
        this.pageUrl = `${this.vfHost}/apex/postMessagePage`
    }

    handleClick(event){
        console.log(window.location.hostname);
        console.log(this.vfHost);

        const iframeWindow = this.template.querySelector('iframe').contentWindow;

        iframeWindow.postMessage('Da Message', this.vfHost);

        // const hostname = window.location.
        // console.log(JSON.stringify(this.pageRef));
        // console.log(this.pageRef.type);
        // console.dir(this.pageRef.attributes);

        // this[NavigationMixin.GenerateUrl](this.pageRef)
        //     .then( url => {
        //         this.currentUrl = url
        //         console.log(this.currentUrl);
        //     });

        // console.log(this.currentUrl);

    }

    async getUrl(pageRef){
        return this[NavigationMixin.GenerateUrl](this.pageRef);
    }

    /*
    left off: 
    - found a way to get the LWC host name
    - Is there a way to tranform that to the Visualforce hostname? 


    notes: 
    - be sure to stabilize visualforce URLs
    */

}