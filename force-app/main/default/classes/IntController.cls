public without sharing class IntController {

    @AuraEnabled
    public static List<String> getMyIds() {
        List<String> myIDs = new List<String>();
        
        String id1 = [SELECT id FROM Intelligence__c LIMIT 1].id;
        String id2 = [SELECT id FROM CSheet__c LIMIT 1].id;

		myIDs.add(id1);
        myIDs.add(id2);
        
        return myIDs;
    }
 
    
}