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
  ga('create', Meteor.settings.public.ga.account);
  
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



