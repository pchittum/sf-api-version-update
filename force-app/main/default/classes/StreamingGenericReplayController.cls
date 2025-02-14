public class StreamingGenericReplayController {

    public String channel{get; private set;}
    public Id channelId{get; private set;}
    public Integer replayFrom{get;set;}
    
    public StreamingGenericReplayController() {
        this.channel = '/u/Trailhead';
        this.replayFrom = -2;
        this.channelId = getStreamingChannelId(this.channel).Id;
    }
    
    private StreamingChannel getStreamingChannelId(String channel) {
        return [SELECT Id FROM StreamingChannel WHERE Name=:channel];
    }
}