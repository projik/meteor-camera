Package.describe({
    name: "supaseca:camera",
    summary: "Updated for Meteor 1.4. Photos with one function call on desktop and mobile.",
    version: "1.4.3",
    git: "https://github.com/projik/meteor-camera"
});

Cordova.depends({
    "cordova-plugin-camera": "2.3.0"
});

Package.onUse(function(api) {
    api.export('MeteorCamera');
    api.use(["templating", "session", "ui", "blaze", "reactive-var"]);
    api.versionsFrom("METEOR@1.2");
    api.use("isobuild:cordova@5.2.0");

    api.addFiles('photo.html');
    api.addFiles('photo.js');
    api.addFiles("camera.css", ["web.browser"]);
    api.addFiles('photo-browser.js', ['web.browser']);
    api.addFiles('photo-cordova.js', ['web.cordova']);
});