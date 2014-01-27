(function() {
	AUI().use('even-odd-portlet', function(A) {
		Liferay.createPortlet({
			PLUGIN_NAME: "poc_alloyui_portlet",
			PORTLET_NAME: "even-portlet",
			EXTENDS: Liferay.EvenOddPortlet,
			prototype: {	
				_descreaseCounterValue : function() {
					var instance = this;
					var counterNode = instance.one("li");
					var counter = parseInt(counterNode.html());
					
					if ((counter - 2) <= 2) {
						counterNode.html(2);
						return false;
					}
					else {
						counterNode.html(counter - 2);
						return true;
					}
				},
				_increaseCounterValue : function() {
					var instance = this;
					var counterNode = instance.one("li");
					var counter = parseInt(counterNode.html());
					
					counter = counter + 2;
					counterNode.html(counter);					
				}			
			}
		});
	});
}());