public class ContactAura {
@AuraEnabled

public static List<Contact> getAllContacts()
{

    return [select id, name from Contact limit 5];    
}
}