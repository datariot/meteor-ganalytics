Package.describe({
  summary: "Publish pageviews and events to Google Analytics using the new analytics.js code."
});

Package.on_use(function (api) {

  api.add_files(['ganalytics.js'], 'client');
  
  if (typeof api.export !== 'undefined') {
    api.export(['GAnalytics'], 'client');
  }
});