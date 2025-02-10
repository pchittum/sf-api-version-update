({
    doInit : function(component, event, helper) {
        
        let id = component.getGlobalId();
        
        if (!component.compProperty){
            component.compProperty = 1; 
            console.log("Initialized compProperty value in " + id + " to 1");
        } else {
            component.compProperty += 1; 
            console.log("Incremented compProperty value in " + id + " to " + helper.helperProperty);
        }
        
        if (!helper.helperProperty) {
            helper.helperProperty = 1; 
            console.log("Initialized helperProperty value in " + id + " to 1 ");
        } else {
            helper.helperProperty += 1; 
            console.log("Incremented helperProperty value in " + id + " to " + helper.helperProperty);   
        }
    }
})