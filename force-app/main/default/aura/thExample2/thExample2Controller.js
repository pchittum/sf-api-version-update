({
    handleSaveRecord: function(component, event, helper) {

        let recordData = component.find("recordEditor");
        
        if (recordData) {
            recordData.saveRecord($A.getCallback(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    console.log("Save completed successfully.");
                } else if (saveResult.state === "INCOMPLETE") {
                    console.info("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    console.error('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                    helper.toast(component, "Error", "Problem saving record, error: " + JSON.stringify(saveResult.error), "error");
                } else {
                    console.error('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            }));
        } else {
            console.error("force:recordData not found");
            helper.toast(component, "Oops!", "No record data", "error")
        }
    }
})