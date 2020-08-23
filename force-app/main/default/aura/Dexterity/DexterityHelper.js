({
    init : function(component,event,helper) {
    	let info = component.get("{!c.getEquipment}");
          info.setCallback(this, function(response) {
			let items = response.getReturnValue();
			component.set("v.EquipmentItems", items);
              console.log(items)
        });
        $A.enqueueAction(info);
    }
})