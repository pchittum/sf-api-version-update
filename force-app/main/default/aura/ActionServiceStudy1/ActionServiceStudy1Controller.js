({
	doInit : function(component) {

        $A.log('entered init');

        var action = component.get("c.getExpenses");

        //var self = this;

        action.setCallback(this, function(actionResult){
            $A.log('entered callback');

            var respData = actionResult.getReturnValue();

            component.set('v.expenses', respData);

        });

        $A.enqueueAction(action);

	}
})