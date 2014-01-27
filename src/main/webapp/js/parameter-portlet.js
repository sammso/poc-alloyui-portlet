(function() {
	AUI().use('liferay-portlet','aui-button','json-parse', function(A) {
		Liferay.createPortlet({
			PLUGIN_NAME: "poc_alloyui_portlet",
			PORTLET_NAME: "parameter-portlet",
			prototype: {
				initPortlet : function() {
					var instance = this;
					var rootNode = instance.rootNode;
					
					var configJson = rootNode.one("script").getDOM().innerHTML;
					var config = A.JSON.parse(configJson);
	
					var ulNode = instance.one("ul");
					
					var addButton = new A.Button({
						srcNode : instance.one(".addButton")
					});
					
					var i = 0;
					
					addButton.on("click", function(e) {
						if (i < config.length)  {
							A.Node.create("<li>" + config[i].name + "</li>").appendTo(ulNode);
							i++;
						}
						if (i >= config.length) {
							addButton.disable();
							clearButton.enable();
						}
					});
	
					var clearButton = new A.Button({
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
			}
		});
	});
}());