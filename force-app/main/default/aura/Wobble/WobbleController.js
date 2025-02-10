({
	doInit: function(component, event, helper) {
        $A.log('currently in init');

        //create the function we're going to later assign as the DeviceOrientation event handler
		component.doOrientation = helper.getOrientFunc(component);

        //there's not much to this...initially I had been interested in device
        //motion, too, so this would have been either this or DeviceMotion
        //only once I got this working I lost interest in DeviceMotion.
		component.set('v.doEvent', 'DeviceOrientation');
	},
    stopWobble : function(component, event, helper){
        //event handler for button on UI. we also need a way to
        //remove the DeviceOrientation handler if nav goes away from the component.
        //in the end I found most consistent results by doing a

        //update the parent record with the end timestamp
        helper.wobbleWrapUp(component);
    },
	changeLocation: function(){
        window.alert('something is calling changeLocation that shouldn not');
        /*
		$A.log('in locationChange event handler')

		//get end context
		var stopNow = new Date();
		var wobId = component.get('v.wobbleId');

		$A.log(stopNow);

		//get server action, set params to update parent record, set callback
		var endWobble = component.get('c.finishWobble');

		endWobble.setParams(
			{
				recId: wobId,
				stop: stopNow,
				stopMS: stopNow.valueOf()
			});

		endWobble.setCallback(this, function(a){
			if (a.getState()==='SUCCESS'){
				var wob = a.getReturnValue();
				$A.log('finished wobble, bye!');
			} else{
				$A.log('failed saving wobble');
			}
		},'ALL');

		$A.enqueueAction(endWobble);

		//clean up the window event listener when we go somewhere else in app.
		$A.run(function(){
			window.removeEventListener('deviceorientation',helper.doOrientation);
			clearInterval(helper.intervalId);
		});
        */
	}
})