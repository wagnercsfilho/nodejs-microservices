module.exports = {
    bufferToObject(buffer) {
      return JSON.parse(buffer.toString())
    },
    objectToBuffer(obj) {
      return new Buffer.from(JSON.stringify(obj));
    }
  }
  