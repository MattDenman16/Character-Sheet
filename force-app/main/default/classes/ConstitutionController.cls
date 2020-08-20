public without sharing class ConstitutionController {

    
    @AuraEnabled
    public static List<String> getConstitution(){
        List<String> valueList = new List<String>();
        valueList.add([Select Id From Constitution__c LIMIT 1].id);
        valueList.add([Select Id From CSheet__c LIMIT 1].id);
        return valueList;        
    }
    
    
}