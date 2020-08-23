({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getConstitution}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.Constitution", id[0]);
            component.set("v.Csheet", id[1]);
        });
        $A.enqueueAction(info);
	}
})