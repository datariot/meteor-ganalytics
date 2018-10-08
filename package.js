Package.describe({
  summary: "Publish pageviews and events to Google Analytics using the new analytics.js code.",
  version: "0.3.0",
  name: "datariot:ganalytics", 
  git: 'https://github.com/datariot/meteor-ganalytics.git'
});

Package.onUse(function (api) {

  api.addFiles(['ganalytics.js'], 'client');
  
  api.export(['GAnalytics'], 'client');

});
