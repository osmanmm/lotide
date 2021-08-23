  const findKey = function(object, callback) {
    let objKey = Object.keys(object);
    for (let i in objKey) {
      if (callback(object[objKey[i]])) {
        return objKey[i];
      }
    }
    return undefined;
  };
   module.exports = findKey;