opera.isReady(function() {
    var tests = {}; // Asynchronous tests
    
    tests["block"] = async_test("Blocking by resource type: script.");
    block.add("*external.js*");
    
    opera.extension.onmessage = function(evt) {
    	opera.postError(JSON.stringify(evt.data));
    
    	if (evt.data.type === "contentblocked") {
    		tests["block"].step(function(){
    			assert_equals(evt.data.url, "http://t/resources/scripts/external.js", "The correct URL should be blocked.");
    			assert_equals(evt.data.tagName.toUpperCase(), "SCRIPT", "The correct element should be blocked.");
    		});
    	} else if (evt.data.type === "contentunblocked") {
    		tests["block"].step(function(){
    			assert_unreached("Unexpected message recieved: " + JSON.stringify(evt.data))
    		});
    	} else {
    		return // Ignore contentallowed events
    	}
    	tests["block"].done();
    }
    
    var data = "<!DOCTYPE html><script src='http://t/resources/scripts/external.js'></script>";
    
    createTab({url: getProxyURL(encodeURIComponent(window.btoa(data)))});
});
