GAnalytics: Google Analytics for Meteor
===================================

Log page views and events to Google Analytics.
### Installing
```
mrt install GAnalytics
```

If you don't have a settings.json file, you need to add one and load it according to the Meteor documentation. http://docs.meteor.com/#meteor_settings

In settings.json add
```json
{
  "public" : {
    "ga": {
      "account":"UA-XXXXXXX-Y"
    }
  }
}
```
### Usage

In your router or controller:
```js
GAnalytics.pageview();
GAnalytics.pageview("/hello");


GAnalytics.event("account","signin");
GAnalytics.event("account","signin","DataRiot");
GAnalytics.event("account","signin","DataRiot", 2);
```
