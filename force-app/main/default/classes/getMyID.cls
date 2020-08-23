public without sharing class getMyID {

    @AuraEnabled
    public static List<String> getMyId() {
        list<String> myIds = new List<String>();
        
        myIds.add([SELECT id FROM Dexterity__c LIMIT 1].id);
        myIds.add([SELECT id FROM Equipment__c LIMIT 1].id);
        myIds.add([SELECT id FROM CSheet__c LIMIT 1].id);
        
        return myIds;
    }
    
    @AuraEnabled
    public static List<Equipment__c> getEquipment() {
        list<Equipment__c> newList = [SELECT id, Name, Damage__c, Defense__c, Weight__c FROM Equipment__c];        
        return newList;
    }
}