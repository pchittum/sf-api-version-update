public class SlackOpportunityPublisher {
    
    private static final String slackURL = 'https://hooks.slack.com/services/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';
    
    public class Oppty {
        @InvocableVariable(label='Opportunity Name')
        public String opptyName;
        @InvocableVariable(label='Stage')
        public String stage;
    }

    @InvocableMethod(label='Post to Slack')
    public static void postToSlack(List<Oppty> oppties) {
        Oppty o = oppties[0];
        Map<String,Object> msg = new Map<String,Object>();
        msg.put('text', 'The following opportunity has changed:\n' + o.opptyName + '\nNew Stage: *' + o.Stage + '*');
        msg.put('mrkdwn', true);
        String body = JSON.serialize(msg);
        System.enqueueJob(new QueueableSlackCall(slackURL, 'POST', body));
    }
    
    public class QueueableSlackCall implements System.Queueable, Database.AllowsCallouts {
        
        private final String url;
        private final String method;
        private final String body;
        
        public QueueableSlackCall(String url, String method, String body){
            this.url = url;
            this.method = method;
            this.body = body;
        }
        
        public void execute(System.QueueableContext ctx){
            HttpRequest req = new HttpRequest();
            req.setEndpoint(url);
            req.setMethod(method);
            req.setBody(body);
            Http http = new Http();
            HttpResponse resp = http.send(req);
        }
    }
}