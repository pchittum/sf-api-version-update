public class AccountHandler {
    
    public static Account insertNewAccount(String nameParam){
        Account acct = new Account(name=nameParam);
        
        try{
            insert acct;
        } catch (Exception e){
            acct = null;
        }
        
        return acct;
    }

}