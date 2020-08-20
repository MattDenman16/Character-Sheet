public class wisdomApexClass {

    @AuraEnabled
    public static list<string> getString()
    {
        list<string> list1=new list<string>();
        
        list1.add([select id from Wisdom__c limit 1].id);
        list1.add([select id from CSheet__c limit 1].id);
        return list1;
    }
}