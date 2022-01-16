'use strict';


/**
 *
 * body Order  (optional)
 * returns Order
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "quantity" : 1,
  "productId" : 1234,
  "id" : 1,
  "orderDate" : "2022-01-31T12:13:00-08:00",
  "customer" : {
    "firstName" : "John",
    "lastName" : "Doe",
    "phoneNumber" : "55-5555-5555",
    "customerNumber" : "1g23g41i34"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

