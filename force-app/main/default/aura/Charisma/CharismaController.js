({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getCharisma}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.charisma", id[0]);
            component.set("v.csheet", id[1]);
        });
        $A.enqueueAction(info);
	}
})