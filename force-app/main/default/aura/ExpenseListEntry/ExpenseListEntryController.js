({
	    //Handle the expense select event
    viewExpense: function(component) {

        $A.log("ExpenseListEntryController.viewExpense: entered");

        //Set a variable to pass to the event of the changed record
        var expense = component.get("v.expense");
		$A.log("ExpenseListEntryController.viewExpense: expense= "+expense.Name);


        var appEvent= $A.get("e.c:ExpenseSelected");
        appEvent.setParams({
            "expense": expense,
            "msg":"Hello World!"
        });
        appEvent.fire();

        var sendId = $A.get('e.c:focusAppId');
        sendId.setParams({'recordId': expense.Id});
        sendId.fire();

        $A.log("ExpenseListEntryController.viewExpense: exit");
     }
})