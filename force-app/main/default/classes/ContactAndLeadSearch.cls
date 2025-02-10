public class ContactAndLeadSearch {
    
    public static List<List<sobject>> searchContactsAndLeads(String searchStr){
        
        List<List<sobject>> results = [FIND : searchStr IN ALL FIELDS RETURNING Contact, Lead];
        
        return results;
        
    }

}