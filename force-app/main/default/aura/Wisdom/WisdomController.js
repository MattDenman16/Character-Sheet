({
	doInit : function(component, event, helper) {
        let info=component.get("{!c.getString}");
        info.setCallback(this,function(response){
            let id=response.getReturnValue();
            component.set("v.Perception",id[0]);
            component.set("v.Survival",id[1]);
        })
        $A.enqueueAction(info);
	}
})