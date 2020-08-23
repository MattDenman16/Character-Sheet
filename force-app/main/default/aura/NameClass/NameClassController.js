({
	doInit : function(component, event, helper) {
        let info=component.get("{!c.CsheetId}");
        info.setCallback(this,function(response){
            let id=response.getReturnValue();
            component.set("v.CSheet", id[0]);
        })
        $A.enqueueAction(info);
	}
})