({
	 init : function(component,event,helper) {
    	let info = component.get("{!c.getAttacks}");
          info.setCallback(this, function(response) {
			let items = response.getReturnValue();
			component.set("v.attackSkills", items);
        });
        $A.enqueueAction(info);
     }
})