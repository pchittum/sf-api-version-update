({
    doInit : function(component, event, helper) {
        helper.getAllContacts(component, helper);

        if (!component.compProperty){
            component.compProperty = 0; 
        }
        
        helper.helperProperty += 1; 
        console.log("helperProperty value: " + helper.helperProperty);
        
		component.compProperty += 1; 
        console.log("compProperty value: " + component.compProperty);
        
        let item = component.get('v.item');
        console.log(JSON.stringify(item));
        console.log(typeof item);
        
    }
})