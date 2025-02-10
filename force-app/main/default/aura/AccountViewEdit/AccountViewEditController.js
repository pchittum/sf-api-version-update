({
	doInit: function(component) {

		var action = component.get('c.getAnAccountId');
		action.setCallback(this, function(a){
			if (a.getState()==='SUCCESS'){
				component.set('v.acctId', a.getReturnValue());
				//component.find('acctId').set('v.recordId',a.getReturnValue());
			} else {
				$A.log('that did not work');
			}
		});
		$A.enqueueAction(action);
	}
})