(function() {
    const blockedAlerts = [
        "ngg bypass by frogiesarcade.win",
        "you are running nowgg.lol instead of the traditional links! this is not recommended as it could lead to some filters blocking access to the site! we recommend Ultraviolet as the proxy to use on this site, if you cant get access to an ultraviolet link use rhodium."
    ];

    const iframe = document.getElementById('content-frame');

    window.alert = function(message) {
        if (!blockedAlerts.includes(message)) {
            console.log(`Blocked alert: "${message}"`);
        }
    };

    iframe.contentWindow.alert = window.alert;
})();
