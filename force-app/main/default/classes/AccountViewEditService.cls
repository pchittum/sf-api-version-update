public with sharing class AccountViewEditService {

	@AuraEnabled
	public static Id getAnAccountId (){
		Account acct = [Select id from Account limit 1];
		return acct.Id;
	}
    
	@AuraEnabled
    public static Account fetchAccount(Id acctId){
        Account newAcct;
        try {
            System.debug('querying for account id: ' + acctId);
        	newAcct = [SELECT Id, Name, Type, ParentId, BillingStreet, BillingCity, BillingState, 
                       			BillingPostalCode, BillingCountry, BillingLatitude, BillingLongitude, 
                       			BillingGeocodeAccuracy, Phone, Fax, AccountNumber, Website, PhotoUrl, 
                       			Sic, Industry, AnnualRevenue, NumberOfEmployees, Ownership, TickerSymbol, 
                       			Description, Rating, Site, OwnerId, CreatedDate, CreatedById, 
                       			LastModifiedDate, LastModifiedById, LastActivityDate, LastViewedDate, 
                       			LastReferencedDate, Jigsaw, JigsawCompanyId, CleanStatus, AccountSource, 
                       			DunsNumber, Tradestyle, NaicsCode, NaicsDesc, YearStarted, SicDesc, 
                       			DandbCompanyId, ConnectionReceivedId, ConnectionSentId, CustomerPriority__c, 
                       			SLA__c, Active__c, NumberofLocations__c, UpsellOpportunity__c, SLASerialNumber__c, 
                       			SLAExpirationDate__c, Customer_ID__c, opportunity_count__c, ShippingStreet, 
                       			ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry, ShippingLatitude, 
                       			ShippingLongitude, ShippingGeocodeAccuracy 
                       FROM Account 
                       WHERE Id = : acctId];
        } catch (QueryException e){
            System.debug('No record was found for the Id provided. Returning null account');
        }
        return newAcct;
    }
    
    @AuraEnabled
    public static List<Account> getRecentAccounts(){
        return [SELECT Id, Name, Type, BillingStreet, BillingCity, 
                		BillingState, BillingPostalCode, BillingCountry, 
                		BillingLatitude, BillingLongitude, BillingGeocodeAccuracy, 
                		BillingAddress, Phone, Industry, AnnualRevenue, 
                		NumberOfEmployees, Description, Active__c, NumberofLocations__c, 
                		opportunity_count__c 
                FROM Account
                ORDER BY LastModifiedDate DESC
                LIMIT 10];
    }


}