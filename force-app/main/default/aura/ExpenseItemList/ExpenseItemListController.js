({
    //Initialize the view and fetch the list of expenses on load
    //fixed function params: added back in event and helper
    doInit : function(component, event, helper) {

        $A.log("ExpenseItemListController.doInit: entered");

		//Fetch the expense list from the Apex controller
        helper.getExpenseList(component);

        $A.log("ExpenseItemListController.doInit: exit");
    },

        //This is the event handler to select an expense
    onExpenseSelectedEvent : function() {

        $A.log("ExpenseItemListController.onExpenseSelectedEvent: entered");

        //Display an alert indicating the event has been handled
        alert("Handled the Expense Selected Event!");

        $A.log("ExpenseItemListController.onExpenseSelectedEvent: exit");
    }

})