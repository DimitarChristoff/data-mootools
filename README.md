data-mootools
=============

![Screenshot](https://github.com/DimitarChristoff/data-mootools/raw/master/data-mootools.png)

A poly-fill that provides an easy API for accessing all data- attributes on an element.
It emulates the *.data* functionality found in jQuery that grabs any HTML5 data- attributes from
an element and makes them available for future reference without further DOM access.

How to use
----------

This is an element shortcut (prototype method) that stores the attributes within element storage
after it 'normalises' them. Normalising being camel-casing - think CSS attributes vs .style collection
keys. So, `data-this-name` will become `thisName` as key.

Several examples:

```javascript

    // eg markup: <a href='#' data-title='hi there' data-tip-position='left' data-json='{"hi":"there"}'>link</a>

    // make data attributes in all links available to elements via storage
    document.getElements("a").data();

    // read something from storage - return data-title
    document.getElement("a").data("title");

    // read json from storage - return data-json
    typeof document.getElement("a").data("json") == 'object';

    // reference json props
    document.getElement("a").data("json").hi; // "there"

    // read something from storage - return data-tip-position
    document.getElement("a").data("tipPosition");

    // many ways to access dynamically:
    element.data("tipPosition") == element.data("tip-position"); // true
    element.data("tipPosition") == element.data("data-tip-position"); // true

    // static collection
    var data = element.data();
    data['tipPosition'] == element.get("data-tip-position"); // true

    // get an element, set a data attribute and force-refresh when getting it
    document.getElement("a").set("data-title", "Simon says").data("title", true);
```

Testing
-------

A full suite of tests is provided based upon node / Buster.js - see the `/test` directory and the
README.md there for further reference.
