GAnalytics = {}

GAnalytics.pageview = function(pageLocation) {
    console.log("Analytics code is not loaded yet.");
  };
GAnalytics.event = function(category, action, label, value) {
    console.log("Analytics code is not loaded yet.");
  };


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

  load(window,document,'script','//www.google-analytics.com/analytics.js','ga');

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

  GAnalytics.pageview = function(pageLocation) {
    if(!pageLocation) {
      pageLocation = window.location.pathname;
    }
    ga('send', 'pageview', pageLocation);
  }
  
  GAnalytics.event = function(category, action, label, value) {
    ga('send', 'event', category, action, label, value);
  }
} else {
  console.log("public.ga.account has not been set in your settings.json file.");
}



