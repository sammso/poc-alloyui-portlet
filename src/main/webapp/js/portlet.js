(function() {
	AUI.add('liferay-portlet', function(A) {	
		var BasePortlet = A.Component.create({
				AUGMENTS: [Liferay.PortletBase],
				EXTENDS: A.Base,
				NAME: 'base-portlet',
				ATTRS: {},
				prototype: {
					initPortlet: function(portletId, node) {
						// To be overridden on child classes
					},
					getConfig: function() {
						var instance = this;
						var returnValue;
						instance.all("script").each(function (node) {
							if ( node.attr('type')==="portlet/configuration" ) {
								returnValue = A.JSON.parse(node.html());
							}
						});
						return returnValue;
					},
					_initPortlet: function(portletId, node) {
						var instance = this;
						var rootNode = A.one(node);			
						instance.rootNode = rootNode.one(".portlet-body");
						instance.initPortlet();
					}
				}
			}
		);
		
		Liferay.BasePortlet = BasePortlet;

		var portlets = {};

		Liferay.createPortlet = function(config) {
			if (!('EXTENDS' in config)) {
				config.EXTENDS = Liferay.BasePortlet;
			}
			
			var plugin = config.PLUGIN;
			var portletName = config.PORTLET_NAME;	
			
			var portletFullName = '';
			
			if ('PLUGIN_NAME' in config) {
				portletFullName = "_WAR_" + config.PLUGIN_NAME.replace(/[_]|[-]/g,"");
			}
			
			var portlet;
						
			if ('PORTLET_NAME' in config) {
				portletFullName = config.PORTLET_NAME.replace(/[_]|[-]/g,"") + portletFullName;
				
				if (!('NAME' in config)) {
					config.NAME = portletFullName;
				}
				
				portlet = A.Component.create(config);
				
				if( !portlets[portletFullName]) {
					portlets[portletFullName] = portlet;
				}
				else {
					throw new "Portlet plugin: " + plugin + " portlet-name: " + portletName + " has been already registered"; 
				}
			}
			else {
				// Case of "abstract" portlets the portlet is not registered
				// abstract portlets only have NAME config property, but not PORTLET_NAME property
				portlet = A.Component.create(config);
			}
			
			return portlet;
		};

		var _portletsReady = function(portletId, node) {
			var portletName = portletId.replace(/[_]INSTANCE[_].+/g,"");
			if (portlets[portletName]) {
				var portlet = new portlets[portletName]({namespace: portletId});
				portlet._initPortlet.call(portlet, portletId, node);
			}
		};

		Liferay.Portlet.ready(_portletsReady);

	}, '', {
		requires : ['aui-component', 'liferay-portlet-base']
	});
}());