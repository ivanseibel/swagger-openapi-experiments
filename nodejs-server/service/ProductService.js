'use strict';


/**
 *
 * pageNumber Integer Page number to return (optional)
 * pageSize Integer Number of the items per page (optional)
 * returns List
 **/
exports.productGET = function(pageNumber,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "https://server.com/images/123.jpeg",
  "name" : "Bluetooth mouse",
  "description" : "3-button wireless optical mouse",
  "id" : 123,
  "image_title" : "3-button-wireless-mouse"
}, {
  "image" : "https://server.com/images/123.jpeg",
  "name" : "Bluetooth mouse",
  "description" : "3-button wireless optical mouse",
  "id" : 123,
  "image_title" : "3-button-wireless-mouse"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a product to the catalog
 *
 * body Product  (optional)
 * no response value expected for this operation
 **/
exports.productPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * productId Integer Product id
 * customerSecurityHeader String Customer token (optional)
 * returns Product
 **/
exports.productProductIdGET = function(productId,customerSecurityHeader) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "https://server.com/images/123.jpeg",
  "name" : "Bluetooth mouse",
  "description" : "3-button wireless optical mouse",
  "id" : 123,
  "image_title" : "3-button-wireless-mouse"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

