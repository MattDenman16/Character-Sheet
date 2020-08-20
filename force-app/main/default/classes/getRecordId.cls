public without sharing class getRecordId {
	
    @AuraEnabled
    public static string CsheetId() {
		
        String recID = [SELECT Id FROM Csheet__c LIMIT 1].id;
        return recID;
    }
}