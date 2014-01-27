(function() {
	AUI().use('even-odd-portlet', function(A) {
		Liferay.createPortlet({
			PLUGIN_NAME: "poc_alloyui_portlet",
			PORTLET_NAME: "odd-portlet",
			EXTENDS: Liferay.EvenOddPortlet,
			prototype: {
				_descreaseCounterValue : function() {
					var instance = this;
					var counterNode = instance.one("span");
					var counter = parseInt(counterNode.html());
					
					if ((counter - 2) <= 1) {
						counterNode.html(1);
						return false;
					}
					else {
						counterNode.html(counter - 2);
						return true;
					}
				},
				_increaseCounterValue : function() {
					var instance = this;
					var counterNode = instance.one("span");
					var counter = parseInt(counterNode.html());
					
					counter = counter + 2;
					counterNode.html(counter);					
				}				
			}
		});
	});
}());