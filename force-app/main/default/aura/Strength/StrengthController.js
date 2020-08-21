({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getStrength}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.strength", id[0]);
            component.set("v.attack", id[1]);
            helper.init(component, event, helper);
        });
        $A.enqueueAction(info);
	},
    
    handleOnSubmit : function(component, event, helper) {
        component.set("v.attackBool", false);
        console.log(component.get('v.attackBool'));
        component.set("v.attackBool", true);
        console.log(component.get('v.attackBool'));
    }
})