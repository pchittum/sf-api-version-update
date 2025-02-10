({
    toast : function(component, title, message, variant) {
        component.find("notifs").showToast({
            "title": title,
            "message": message,
            "variant": variant
        });

    }
})