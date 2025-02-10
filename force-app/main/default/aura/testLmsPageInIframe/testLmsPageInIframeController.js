({
    handleLeadDataMessage : function(component, event, helper) {
        if (event != null && event.getParams() != null) {
            let params = event.getParams();
            console.log(JSON.stringify(params));
            component.set("v.recordValue", JSON.stringify(params, null, "\t"));
        }
    }
})