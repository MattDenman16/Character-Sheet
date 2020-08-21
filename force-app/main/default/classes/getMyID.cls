public without sharing class getMyID {

    @AuraEnabled
    public static List<String> getMyId() {
        list<String> myIds = new List<String>();
        
        String id1 = [SELECT id FROM Dexterity__c LIMIT 1].id;
        String id2 = [SELECT id FROM Equipment__c LIMIT 1].id;
        
        myIds.add(id1);
        myIds.add(id2);
        
        return myIds;
    } 
}