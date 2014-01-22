(function() {
	YUI().use('base-portlet','aui-button','json-parse', function(Y) {
		Y.addPortletClass(Y.Base.create(
			'poc-portlet',
			Y.BasePortlet,
			[],
			{
				portletReady : function(portletId, node) {
					var instance = this;
					var rootNode = instance.rootNode;
					
					var configJson = instance.one("script").getDOM().innerHTML;
					var config = Y.JSON.parse(configJson);

					var ulNode = instance.one("ul");
					
					var addButton = new Y.Button({
						srcNode : instance.one(".addButton")
					});
					
					var i = 0;
					
					addButton.on("click", function(e) {
						if (i < config.length)  {
							Y.Node.create("<li>" + config[i].name + "</li>").appendTo(ulNode);
							i++;
						}
						if (i >= config.length) {
							addButton.disable();
							clearButton.enable();
						}
					});

					var clearButton = new Y.Button({
						srcNode : instance.one(".clearButton")
					});
					
					
					clearButton.on("click", function(e) {
						ulNode.setContent("");
						addButton.enable();
						clearButton.disable();
						i=0;
					});					
					
					addButton.render();
					addButton.enable();
					clearButton.render();
				}
			}, {
		}));
	});
}());