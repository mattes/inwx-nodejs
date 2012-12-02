var http = require('http') // or https
var inwx = require('inwx');


/*
 * Get my IP address and update
 * nameserver records for testtest123.info
 */

// retrieve my ip ...
http.get("http://echoip.com", function(res) {
  res.on("data", function(data){
    var IP_ADDRESS = data + ""; // @todo ip address validation!!!!

    // connect to inwx
    inwx({api: "testing", user: "max", password: "pass"}, function(api){

      // update nameserver
      // @todo update on changes only
      api.nameserverRecordHelper("testtest123.info", "update", {content: IP_ADDRESS}, {type: "A"}, function(response) {
        console.log("IP updated to " + IP_ADDRESS);
      });   

      api.close();
    });
  });

  res.on("error", function(e){
    console.error(e.message);
  });

});

