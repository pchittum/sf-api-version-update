({
       //This is the event handler to select an expense
    onExpenseSelectedEvent : function(component, event) {
        $A.log("ExpenseCardController.onExpenseSelectedEvent: entered");
        var expense = event.getParam('expense');
        $A.log("ExpenseCardController received msg = "+event.getParams('msg')+" acct= "+expense.Name);
        $A.log("ExpenseCardController component = "+component);

        component.set("v.expense", expense);
        component.set("v.id", expense.Id);
        var link = "javascript:sforce.one.navigateToSObject("+expense.Id+")";
        $A.log("ExpenseCardController id link = "+link);
        component.set("v.id-link", link);
        component.set("v.expenseName", expense.Name);
        component.set("v.expenseAmount", expense.Amount__c);
        component.set("v.expenseClient", expense.Client__c);
        component.set("v.expenseDate", expense.Date__c);
        component.set("v.expenseReimbursed", String(expense.Reimbursed__c));

        //$A.log ("ExpenseCardController expense.Name = "+component.get("v.expense").Name);
        //var attrs = component.getAttributes();
        //attrs.setValue("expense",expense);
        //Display an alert indicating the event has been handled
        //alert("Handled the Expense Selected Event!");

        $A.log("ExpenseCardController.onExpenseSelectedEvent: setting count");

        $A.log("ExpenseCardController.onExpenseSelectedEvent: exit");
    },

	//Handle linking to the record
    linkToRecord: function(component) {
        $A.log("ExpenseCardController.linktToRecord: enter");
        var id = component.get("v.id");
        $A.log("ExpenseCardController.linkToRecord: expense= "+id);

        var appEvent= $A.get("e.force:navigateToSObject");
        appEvent.setParams({
            "recordId": id,
            "slideDevName": "related"
        });
        appEvent.fire();

}
})