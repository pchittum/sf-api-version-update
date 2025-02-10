public class ContactSearch {
    
    public static List<Contact> searchForContacts(String lastN, String postcode){
        List<Contact> contacts = [select Id, Name from Contact where LastName = : lastN AND MailingPostalCode = :postcode];
        return contacts; 
    }
    
    public static List<Hall__c> searchForHalls(String name){
        String nameSearch = '%' + name + '%';
        List<Hall__c> halls = [select Id, Name, Current_Status__c from Hall__c where Name Like : nameSearch];
        return halls;
    }
    

}