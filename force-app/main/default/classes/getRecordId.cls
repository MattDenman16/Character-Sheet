public without sharing class getRecordId {
	
    @AuraEnabled
    public static List<string> CsheetId() {
		List<String> newList = new List<String>();
        newList.add([SELECT id FROM CSheet__c Limit 1].id);
       
        return newList;
    }
}