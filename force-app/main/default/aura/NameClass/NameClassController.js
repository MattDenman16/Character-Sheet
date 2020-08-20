({
	doInit : function(component, event, helper) {
        var url = $A.get('$Resource.DndBack');
        component.set('v.backgroundImageURL', url);
    }
})