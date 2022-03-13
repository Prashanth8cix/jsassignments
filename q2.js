const Obj = function (version, channel, keyfield) {
  this.version = version;
  this.channel = channel;
  this.keyfield = keyfield;

  const getVersion = function () {
    return this.version;
  };
  const getChannel = function () {
    return this.channel;
  };
  const getKeyfield = function () {
    return this.keyfield;
  };
  const setVersion = function (version) {
    this.version = version;
  };
  const setChannel = function (channel) {
    this.channel = channel;
  };
  const setKeyfield = function (keyfield) {
    this.keyfield = keyfield;
  };
};

const model = new Obj(1, 2, 3);
console.log(model);
