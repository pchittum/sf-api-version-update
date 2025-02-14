public with sharing class SpeakerControllerExtension {
    
    public Integer counter {get;set;}
    public Blob picture {get;set;}
    public String errorMessage {get;set;}
    
    private final Speaker__c speaker;
    private ApexPages.StandardController stdController;
    
    public SpeakerControllerExtension(ApexPages.StandardController stdController){
        this.stdController = stdController;
        this.speaker = (Speaker__c) stdController.getRecord();
        counter = 0;
    }

    public void increment() {
        counter++;
    }
    
    public PageReference save() {
        errorMessage = '';
        try{
            upsert speaker;
            if (picture != null){
                Attachment attachment = new Attachment();
                attachment.body = picture;
                attachment.name = 'speaker_' + speaker.id + '.jpg';
                attachment.parentid = speaker.id;
                attachment.ContentType = 'application/jpg';
                insert attachment; 
                speaker.Picture_Path__c = '/servlet/servlet.FileDownload?file=' + attachment.id;
                
                update speaker;
            }
            
            return new ApexPages.StandardController(speaker).view();
            
        } catch(System.Exception ex){
            errorMessage = ex.getMessage();
            return null;
        }
    }
}