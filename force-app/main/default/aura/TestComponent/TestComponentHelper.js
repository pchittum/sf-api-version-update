({
    getAllContacts: function(component, helper){
        
        //this.someOtherFunction("wot!");
        
        //console.log("About component:");
        //console.log(typeof component);
        //console.log(JSON.stringify(component));
        //console.log(component.getPrototypeOf());

//        console.log(component.prototype);
//        console.log(component.prototype[__proto__]);


        //console.log(typeof helper);
        
        
        // these fail so badly as to make the component fall over
        //console.log(JSON.stringify(this.prototype.__proto__)); 
        //console.log(JSON.stringify(this.prototype.constructor)); //
        
        //console.log("is helper this? " + (this === helper)); // false
        //console.log("is component this? " + (this === component)); // false
        //console.log("is window this?" + (this === window)); // false
        
        
        var action = component.get("c.getAllContacts");
        action.setCallback(this, function(a){
            component.set("v.contactRows", a.getReturnValue());
    
    
        });
    
        $A.enqueueAction(action);
    }, 
    someOtherFunction: function(arg) { 
    	console.log("in some other function" + arg);
    }, 
    helperProperty : 0
})