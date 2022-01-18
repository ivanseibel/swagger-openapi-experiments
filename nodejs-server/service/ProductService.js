'use strict';


/**
 *
 * pageNumber Integer Page number to return (optional)
 * pageSize Integer Number of the items per page (optional)
 * returns List
 **/
exports.productGET = function (pageNumber, pageSize) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [{
      "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2500x2500%2FLogitech_910_002974_Wireless_Mouse_M325_Black_882513.jpg&f=1&nofb=1",
      "name": "Bluetooth mouse I",
      "description": "3-button wireless optical mouse",
      "id": 123,
      "image_title": "3-button-wireless-mouse"
    }, {
      "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.americanarza.com%2Fwp-content%2Fuploads%2F2014%2F08%2F91DC1PMp2pL._SL1500_.jpg&f=1&nofb=1",
      "name": "Bluetooth mouse II",
      "description": "3-button wireless optical mouse",
      "id": 123,
      "image_title": "3-button-wireless-mouse"
    }];
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
exports.productPOST = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 *
 * productId Integer Product id
 * customerSecurityHeader String Customer token (optional)
 * returns Product
 **/
exports.productProductIdGET = function (productId, customerSecurityHeader) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "image": "https://server.com/images/123.jpeg",
      "name": "Bluetooth mouse",
      "description": "3-button wireless optical mouse",
      "id": 123,
      "image_title": "3-button-wireless-mouse"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

