({
    doInit : function(component, event, helper) {
        //get design component lists
        
        //set design values into set of links

        let links = component.get("c.linkslist");
        let labels = component.get("c.labelslist");

        //handle exception for too non matching list sizes

        for (var i = 0; i < links.length; i++){
            console.log("label is: " + labels[i] + " link is: " + links[i]);
        }
    }
})