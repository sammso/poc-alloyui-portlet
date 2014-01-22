(function() {
	YUI.add('base-portlet', function(Y) {	
		var BasePortlet = Y.Base.create('base-portlet', Y.Base, [], {
			initializer : function(cfg) {
				var instance = this;
			},
			portletReady : function(portletId, node) {
				// To be overridden on child classes
			},
			all: function(selector, root) {
				var instance = this;
				return instance.rootNode.all(selector);
			},
			one: function(selector) {
				var instance = this;
				return instance.rootNode.one(selector);
			},
			byId: function(id) {
				var instance = this;
				return instance.rootNode.one("#" + instance.NS + id);
			},
			_portletReady: function(portletId, node) {
				var instance = this;
				var rootNode = Y.one(node);			
				instance.rootNode = rootNode.one(".portlet-body");
				instance.NS = portletId;
				instance.portletReady(portletId, node);
			}
		}, {
		});

		Y.BasePortlet = BasePortlet;

		var porletClasses = {};

		Y.addPortletClass = function(portletClass) {
			if(portletClass.NAME!=='base-portlet' && !porletClasses[portletClass.NAME]) {
				porletClasses[portletClass.NAME] = portletClass;
			}
		};

		var _portletsReady = function(portletId, node) {
			var input = Y.one(node).one(
			"input[name=portletClassName]");
			if (input) {
				var portletClassName = input.get('value');
				var portlet = new porletClasses[portletClassName];
				if (portlet) {
					portlet._portletReady.call(portlet, portletId, node);
				}
				else {
					throw "Portlet ID : " + portletId + " does not have corresponding class " + portletClassName + " please check that your .js file has been defined at liferay-portlet.xml";
				}
			}
		};

		Liferay.Portlet.ready(_portletsReady);

	}, '1.0.0', {
		requires : [ 'base']
	});
}());