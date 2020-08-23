({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getMyIds}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.Intelligence", id[0]);
            component.set("v.CSheet", id[1]);
        });
        $A.enqueueAction(info);
	}
})