({
	getOrientFunc: function(component) {
        	console.log('calling closure factory function');
			/*
			in order to have an identifiable

			the whole purpose of this function is to create a closure around the component.
			this works great and runs fine, until you refresh the component...then this instance
			of the c:Wobble component goes away, so we must re invoke and get the latest instance each init.
			*/
		return function(eventData){


            //we are placing this function to run outside the normal LCF
            //event lifecycle: test for component as existing and valid
			if (component && component.isValid()){
				component.set('v.doTiltLR', Math.round(eventData.gamma));
				component.set('v.doTiltFB', Math.round(eventData.beta));
				component.set('v.doDirection', Math.round(eventData.alpha));
			}
		};
	},
	wobbleWrapUp : function(component){
		console.log('wrapping up wobble');
        var componentIsActive = component.get('v.isActive');

        //clean up the deviceorientation event listener and the setInterval
        if (component && component.isValid() && componentIsActive){
            window.removeEventListener('deviceorientation', component.doOrientation);
            clearInterval(component.intervalId);

            //get end context
            var stopNow = new Date();
            var wobId = component.get('v.wobbleId');

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
                    console.log('finished wobble, bye!');
                } else{
                    console.log('failed saving wobble');
                }
                //clean up the window event listener when we go somewhere else in app.
                //really I should be firing off an event here.
                if (component.isValid()){
                    var isActive = component.set('v.isActive', false);
                }
            }, 'ALL');

            $A.enqueueAction(endWobble);
        } else {
           console.log('found no active component. nothing to clean up. ');
        }
	}
})