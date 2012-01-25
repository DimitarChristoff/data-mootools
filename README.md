data-mootools
=============

Provides an easy API for accessing all data- attributes on an element.

How to use
----------

```javascript
// make data attributes in all links available to elements via storage
document.getElements("a").data();

// read something from storage - return data-title
document.getElement("a").data("title");

// get an element, set a data attribute and force-refresh when getting it
document.getElement("a").set("data-title", "Simon says").data("title", true);
```
