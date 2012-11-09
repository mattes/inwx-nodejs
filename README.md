inwx-nodejs
===========

INWX XML-RPC API Client for NodeJS

Installation
------------
    npm install inwx

Official Documentation from InternetWorX
----------------------------------------
 * https://www.inwx.de/de/help#key=20
 * https://www.inwx.de/de/download/file/api-current.zip (logged in inwx customers only)

Usage
-----

``` js
var inwx = require('inwx');

// set api to production or testing
inwx({api: "testing", user: "max123", password: "pass123"}, function(api){
  console.log("API is ready");

  // get account infos
  api.call("account", "info", {}, function(response){
    console.log("account.info response:");
    console.log(response);
  });

  // create record in nameserver set and delete again
  // using helper methods
  // make sure the nameserver for example.com already exists!!
  api.nameserverRecordHelper("example.com", "create", {type: "A", name: "test.example.com", content: "192.168.0.1"}, function(response) {
    console.log("created record:");
    console.log(response);

    // so, lets delete it
    api.nameserverRecordHelper("example.com", "delete", {type: "A", name: "test.example.com", content: "192.168.0.1"}, function(response) {
      console.log("deleted record:");
      console.log(response);
    });  
  });  

  // update record in nameserver   
  api.nameserverRecordHelper("example.com", "update", {content: "192.168.0.2"}, {type: "A", name: "sub.example.com"}, function(response) {
    console.log("updated record sub.example.com with 192.168.0.2:");
    console.log(response);
  });   

  api.close(); // logout 
});

```

License (MIT)
-------------
Released under the MIT license. See the LICENSE file for the complete wording.

