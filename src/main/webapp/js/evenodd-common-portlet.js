(function() {
	AUI.add('even-odd-portlet', function(A) {
		Liferay.EvenOddPortlet = Liferay.createPortlet({
			NAME: "evenodd-common",
			prototype: {
				initPortlet : function() {
					var instance = this;
					var rootNode = instance.rootNode;
					var increaseButton = new A.Button({
						srcNode : instance.one(".increaseButton")
					});
					
					increaseButton.on("click", function(e) {
						instance._increaseCounterValue();
						descreaseButton.enable();
					});
	
					var descreaseButton = new A.Button({
						srcNode : instance.one(".descreaseButton")
					});
					
					
					descreaseButton.on("click", function(e) {
						if(instance._descreaseCounterValue()) {
							descreaseButton.enable();
						}
						else {
							descreaseButton.disable();
						}
					});					
					
					increaseButton.render();
					increaseButton.enable();
					descreaseButton.render();
				}
			}
		});
	}, '', {
		requires : ['liferay-portlet','aui-button','aui-base']
	});
}());