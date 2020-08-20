public without sharing class CharismaController {

    @AuraEnabled
    public static List<String> getCharisma() {
        List<String> newList = new List<String>();
        newList.add([SELECT id FROM Charisma__c Limit 1].id);
        newList.add([SELECT id FROM CSheet__c Limit 1].id);

        return newList;
    }
}