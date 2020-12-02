'use strict';
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
    subString
  ) {
    var randomNumber = (Math.random() * 16) | 0,
      newUUID = subString === 'x' ? randomNumber : (randomNumber & 0x3) | 0x8;
    return newUUID.toString(16);
  });
}

module.exports = uuid;
