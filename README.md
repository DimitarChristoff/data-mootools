data-mootools
=============

Provides an easy API for accessing all data- attributes on an element.

How to use
----------

This is an element shortcut (prototype method) that emulates functionality in jQuery
that allows you to access all data-attributes easily from within element storage.

#html
    <a href='#' data-title='hi there' data-tip-position='left'>link</a>

#js
    // make data attributes in all links available to elements via storage
    document.getElements("a").data();

    // read something from storage - return data-title
    document.getElement("a").data("title");

    // read something from storage - return data-tip-position
    document.getElement("a").data("tipPosition");

    // get an element, set a data attribute and force-refresh when getting it
    document.getElement("a").set("data-title", "Simon says").data("title", true);

