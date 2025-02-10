({
    afterRender : function(component){
        component.superAfterRender();
        console.log('in after render');

        //probably should test for this on init and just stop the whole
        //nonesense if not supported.

        //LockerNote: cannot detect deviceorientation through SecureWindow
		//if (window.DeviceOrientationEvent || true){
            console.log('found DeviceOrientationEvent as object');

            //Report to UI the event.
            //Originally had planed some playing with DeviceMotion, too.

			//This is a study of the caboose actions, and not intended for production.
			//assigning a window-level or global event handler is not supported by Lightning Components JS API
			//It is also risky, to say the least, especially when destined for someone else's app (S1 Mobile!)
			//You must ensure that you perform cleanup so that any global handlers that might reference
			//your component's context are not in operation when the LCF app state cleans up your
			//component.

			//to enable clean up there must be an identifiable event handler to remove,
			//getOrientFunc returns a function with a closure around component
			//as we want to set orientation L/R, F/B, and Dir data into its attribs
			//we assign it as "doOrientation" into the helper.

            //component.doOrientation = helper.getOrientFunc(component);

			//capture start context and set in component...probably don't need this
			var start = new Date();
			component.set('v.start', start);

            console.log('this is the start date');
			console.log(start);

			//get server action to perform, set params and callback
			var startWobble = component.get('c.createWobble');
			startWobble.setParams({start: component.get('v.start'), startMS: start.valueOf()});
			startWobble.setCallback(this, function(a){

                if (component.isValid()){

                    if (a.getState()==='SUCCESS'){
                        var wob = a.getReturnValue();
                        //will need id of parent record when we record the measurements later
                        component.set('v.wobbleId', wob.Id);
                        console.log('wobbleId is: ' + component.get('v.wobbleId'));
                    } else{
                        console.log('failed saving wobble');
                    }
                    component.set('v.isActive', true);
                }
			}, 'ALL');

            $A.enqueueAction(startWobble);


            //TODO: should I be doing this with getCallback?
            //set event handler for device orientation data
            //LockerNote: this works fine as is in locker service
            window.addEventListener('deviceorientation', component.doOrientation);

            //set measurements of device orientation data
            component.intervalId = setInterval($A.getCallback(function(){

            var interval = component.intervalId;

            if (component.isValid()){

                var measure = component.get('c.recordMeasurements');
                measure.setParams(
                    {
                        lr: component.get('v.doTiltLR'),
                        fb: component.get('v.doTiltFB'),
                        dir: component.get('v.doDirection'),
                        wobId: component.get('v.wobbleId')
                    });

                //defer until something else gets enqueued and sent to server
                //LockerNote: not supported with locker service
                //measure.setCaboose();

                //doesn't appear to be called...must ask about this
                measure.setCallback(this, function(a){
                    if (a.getState()==='SUCCESS'){
                                console.log('Added Motion Measurements!');
                            } else {
                                console.log('you failed!');
                            }
                        }, 'ALL');
                        $A.enqueueAction(measure);
                    } else {
                        //cleanup was not successfully running clearInterval
                        //this additional step ensures if this nonsense continues
                        //past the lifecycle of the component, we clean it up.
                        console.log('in clear interval ');
                        clearInterval(interval);
                    }

				}), 5000);
			//});

        //} else {
        //    console.log('No support for Device Orientation');
        //    component.set('v.doEvent', 'No Support');
        //}

    },
    unrender : function(component, helper){
        console.log('doing unrender');
        component.superUnrender();
        helper.wobbleWrapUp(component);
    }
})