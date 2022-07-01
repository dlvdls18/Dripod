function Dripod(text, config) {
  var bytes = [];
  var res = [];
  Array.from(text).forEach(function(char) {
    bytes.push(char.charCodeAt(0).toString(2));
  })
  if(!config) return bytes;
  var byteIndex = 0;
  var newBytes = [];
  bytes.forEach(function(byte) {
    if(config["ins_" + byteIndex] != null) {
      newBytes.push(config["ins_" + byteIndex]);
      byteIndex++;
    }
    newBytes.push(byte);
    byteIndex++;
  });
  if(config["ins_" + byteIndex] != null) newBytes.push(config["ins_" + byteIndex]);
  bytes = newBytes;
  byteIndex = 0;
  var bitIndex = 0;
  bytes.forEach(function(byte) {
    var whole = "";
    if(config["mod_" + byteIndex] != null) byte = config["mod_" + byteIndex];
    if(config["dest_" + byteIndex] != null) {
      byteIndex++;
      return;
    }
    Array.from(byte).forEach(function(bit) {
      if(config["mod_" + byteIndex + "_at_" + bitIndex] != null) bit = config["mod_" + byteIndex + "_at_" + bitIndex];
      if(config["dest_" + byteIndex + "_at_" + bitIndex] != null) {
        bitIndex++;
        return;
      }
      whole += bit;
      bitIndex++;
    });
    res.push(whole);
    whole = "";
    bitIndex = 0;
    byteIndex++;
  });
  return res;
}
Dripod.Builder = function(bytes) {
  var str = "";
  bytes.forEach(function(byte) {
    
  });
  return str;"
}