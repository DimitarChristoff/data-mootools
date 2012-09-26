if (typeof require == "function" && typeof module == "object") {
	buster = require("buster");
}


buster.testCase("Data polyfill tests", {
	setUp: function() {
		this.element = new Element("div", {
			html: [
				'<a id="nav" rel="twipsy" your-data-id="fail" data-placement="below" data-link-title="coda was here" href=#>link 1</a>',
				'<a id="nav" rel="twipsy" data-placement="above" data-title="coda was here again" href=#>link 2</a>',
				'<a id="nav" rel="twipsy" data-placement="left" data-title="now i am gone" href=#>link 3</a>',
				'<a id="nav" rel="twipsy" href=#>link 4</a>'
			]
		});

		this.children = this.element.getChildren();
	},

	"Expect element to have 4 children": function() {
		buster.assert.equals(this.element.getChildren('a').length, 4);
	},

	"Expect .data on a collection to return an array of data objects": function() {
		buster.assert.equals(this.children.length, this.children.data().length);
	},

	"Expect .data on a link to return an object": function() {
		buster.assert.isTrue(typeof this.children[0].data() === 'object');
	},

	"Expect .data on a `-` separated value to camelcase correctly": function() {
		buster.refute.isNull(this.children[0].data("linkTitle"));
	},

	"Expect .data on the first element to have string keys 'placement' and 'linkTitle'": function() {
		var data = this.children[0].data();
		buster.assert.isTrue(typeof data['placement'] == 'string' && typeof data['linkTitle'] == 'string');
	},

	"Expect .data('linkTitle') to equal .data('data-link-title') and .data('link-title')": function() {
		var el = this.children[0];
		el.data();
		buster.assert.isTrue(el.data('linkTitle') == el.data('data-link-title') && el.data('linkTitle') == el.data('link-title'));
	},

	"Expect .data on the first element on an undefined property to be null": function() {
		buster.assert.isNull(this.children[0].data('foo'));
	},

	"Expect .data on the last element not to have any keys and be null": function() {
		var data = this.children.getLast().data();
		buster.assert.isNull(data);
	},

	"Expect .data('prop') to be null": function() {
		var data = this.children.getLast().data('prop');
		buster.assert.isNull(data);
	},

	"Expect .data when force is true to re-read the value from the actual element": function() {
		var placementOld = this.children[0].data("placement");
		this.children[0].set("data-placement", "outside");
		var placementNew = this.children[0].data("placement", true);
		buster.refute.equals(placementOld, placementNew);
	},

	"Expect NOT to pick-up any attribs that don't start with data- but contain it": function() {
		var data = this.children[0].data();
		buster.assert.equals(Object.keys(data).length, 2);
	}

});

