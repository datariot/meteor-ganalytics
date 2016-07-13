GAnalytics = {}

GAnalytics.send = function(){
  console.log("Analytics code is not loaded yet.");
}

GAnalytics.pageview = function(pageLocation) {
  if(!pageLocation) {
    pageLocation = window.location.pathname;
  }
  GAnalytics.send('pageview', pageLocation);
}

GAnalytics.event = function(category, action, label, value) {
  GAnalytics.send('event', category, action, label, value);
}

GAnalytics.social = function(socialNetwork, socialAction, socialTarget) {
  GAnalytics.send('social', socialNetwork, socialAction, socialTarget);
}

GAnalytics.screenview = function(screenName) {
  GAnalytics.send('screenview', screenName);
}

GAnalytics.timing = function(timingCategory, timingVar, timingValue, timingLabel) {
  GAnalytics.send('timing', timingCategory, timingVar, timingValue, timingLabel);
}

GAnalytics.exception = function(exDescription, exFatal) {
  GAnalytics.send('exception', exDescription, exFatal);
}



load = function(i,s,o,g,r,a,m) {
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r] || function(){
    (i[r].q=i[r].q||[]).push(arguments)}
  ,i[r].l=1*new Date();
    a=s.createElement(o), m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
};

if(Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.ga !== undefined && Meteor.settings.public.ga.account !== undefined) {

  load(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  var gaSettings = Meteor.settings.public.ga,
      gaConfig = {};

  // cookie settings
  if(typeof gaSettings.cookieName !== 'undefined')
    gaConfig.cookieName = gaSettings.cookieName;

  if(typeof gaSettings.cookieDomain !== 'undefined')
    gaConfig.cookieDomain = gaSettings.cookieDomain;
  
  if(typeof gaSettings.cookieExpires !== 'undefined')
    gaConfig.cookieExpires = gaSettings.cookieExpires;

  // if gaConfig is still empty, default it to 'auto'
  if(Object.keys(gaConfig).length === 0)
    gaConfig = 'auto';

  ga('create', gaSettings.account, gaConfig);

  if (gaSettings.trackInterests)
    ga('require', 'displayfeatures');

  if (gaSettings.trackInPage)
    ga('require', 'linkid', 'linkid.js');

  GAnalytics.send = function(type, ...args){
    if(!!gaSettings.debug)
      console.log("Logging " + type + ": " + args.join(" | "));

    ga('send', type, ...args);
  }

} else {
  console.log("public.ga.account has not been set in your settings.json file.");
}