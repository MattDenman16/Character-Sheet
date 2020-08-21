public without sharing class StrengthController {

    @AuraEnabled
    public static List<String> getStrength() {
        List<String> newList = new List<String>();
        
        newList.add([SELECT id FROM Strength__c Limit 1].id);
        newList.add([SELECT id FROM Attack__c Limit 1].id);
        
        return newList;
    }
    
    @AuraEnabled
    public static List<Attack__c> getAttacks() {
        List<Attack__c> attackList = [Select id, Name, Type__c, Range__c, Damage__c FROM Attack__c];
        
        return attackList;
    }
}