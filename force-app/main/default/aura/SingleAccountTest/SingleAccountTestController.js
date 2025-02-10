({
	doInit : function(component) {

        var fetchAccount = component.get('c.fetchAccount');

        fetchAccount.setParam('acctId', '00124000003c9qQ');

        fetchAccount.setCallback(this, function(resp){

            if (component.isValid()){
                if (resp.getState() === 'SUCCESS'){
                    $A.log('callback success and component is valid');

                    var acct = resp.getReturnValue();

                    $A.log(acct.Name);

                    component.set('v.accountRecord', acct);
                } else {
                    $A.log('request failed');
                    $A.log(resp);
                    $A.log(resp.error[0]);
                }
            } else {
                $A.log('component unavailable on callback');
            }

        }, 'ALL');
		$A.enqueueAction(fetchAccount);
	}
})