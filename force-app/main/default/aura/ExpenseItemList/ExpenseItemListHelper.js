({
     //Fetch the accounts from the Apex controller
    getExpenseList: function(component) {

        $A.log("ExpenseItemListHelper.getExpenseList: entered");

        //Set the action to invoke the Apex controller method
        var action = component.get("c.getExpenses");

        //Set up the callback
        //var self = this;
        //action.setCallback(this, setExpensesAttribute); <---this is the function invoked below. need to kill it as it is unused.

        action.setCallback(this, function(actionResult) {
            //$A.log("Got accts: ", actionResult.getReturnValue());

            component.set("v.expenses", actionResult.getReturnValue());

        });

        //Enque the action
        $A.enqueueAction(action);

        $A.log("ExpenseItemListHelper.getAccountList: exit");

    },
    setExpensesAttribute: function(actionResult){
        //Reset the value of the component list attribute with the records returned
        component.set("v.expenses", actionResult.getReturnValue());
    }
})