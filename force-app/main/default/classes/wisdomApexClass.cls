public without sharing class wisdomApexClass {

    @AuraEnabled
    public static list<string> getString() {
        List<String> List1=new list<String>();
        
        List1.add([SELECT id FROM Wisdom__c LIMIT 1].id);
        List1.add([SELECT id FROM CSheet__c LIMIT 1].id);
        system.debug(List1);
        return list1;
    }
}