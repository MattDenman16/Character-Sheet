({
    doInit : function(component, event, helper) {
        let info = component.get("{!c.getMyId}");
        info.setCallback(this, function(response) {
			let id = response.getReturnValue();
			component.set("v.Dexterity", id[0]);
            component.set("v.equipment", id[1]);
            helper.init(component, event, helper);
        });
        $A.enqueueAction(info);
    },
    
    render : function(component, event, helper) {
        helper.init(component, event, helper);
    },
    
    handleOnSubmit : function(component, event, helper) {
        component.set("v.EquipmentSubmitted", false);
        console.log(component.get('v.EquipmentSubmitted'));
        component.set("v.EquipmentSubmitted", true);
        console.log(component.get('v.EquipmentSubmitted'));
    }
})