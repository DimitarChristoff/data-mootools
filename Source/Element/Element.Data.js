/*
---

name: data-mootools

description: An API for access to data-attributes in elements.

authors: [Dimitar Christoff]

license: MIT-style license.

provides: [Element.prototype.data]

...
*/
(function() {

    var formatDataProperty = function(prop) {
        return prop.replace('data-', '').camelCase();
    };

    [Document, Element].invoke('implement', {

        data: function(property, force) {
            var data = this.retrieve('dataCollection');
            if (!data || force === true) {
                data = {};
                var hasData = false, attribs = !this.propertyIsEnumerable('attributes') ? this.attributes || [] : [];
                for (var ii = 0, len = attribs.length; ii < len; ++ii) {
                    if (attribs[ii].name.indexOf('data-') === 0) {
                        data[formatDataProperty(attribs[ii].name)] = attribs[ii].value;
                        hasData = true;
                    }
                }

                if (!hasData)
                    data = null;
                this.store('dataCollection', data);
            }
            if (!property)
                return data;

            return data[formatDataProperty(property)] || null;
        }

    });


})();