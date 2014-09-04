inwx-nodejs
===========

A Node.js client to connect to [inwx](https://www.inwx.de) XML-RPC API.

Installation
------------
    npm install inwx

Official Documentation from InternetWorX
----------------------------------------
You can view a detailed description of the API functions in our documentation. The documentation as PDF ist part of the Projekt. You also can read the documentation online http://www.inwx.de/en/help/apidoc

Prerequisites
-------------
 * For the production API, you need an account at https://www.inwx.de
 * For the testing API, register a new account at https://ote.inwx.de. You won't be able to use your standard credentials from inwx.de!

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

  // SOA serial numbers are updated by INWX automatically!

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

  // be aware that calls are made asynchronously! call api.close() when all other calls terminated.
  // api.close(); // logout 
});

```

See example.js for more examples.


License (MIT)
-------------
Released under the MIT license. See the LICENSE file for the complete wording.

