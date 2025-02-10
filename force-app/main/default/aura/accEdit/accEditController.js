({
    saveRecord : function(component, event, helper) {
        let recordData = component.find("accountRecord");

        recordData.saveRecord(function(saveResult){

            let saveState = saveResult.getState();

            if (saveState === "SUCCESS") {
                console.log("record result is: " + saveResult.state);                
            } else if (saveState === "ERROR") {
                console.error("Error on save: " + saveResult.error);
                component.set("v.recordSaveError", "Error on save: " + saveResult.error);
            }

        });
    }
})