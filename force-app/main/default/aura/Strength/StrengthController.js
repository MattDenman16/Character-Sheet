({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getStrength}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.strength", id[0]);
            component.set("v.attack", id[1]);
        });
        $A.enqueueAction(info);
	}
})