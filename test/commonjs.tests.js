var expect = require('chai').expect;
var XvReact = require('../dist/XvReact.min.js');

describe('XvReact', function () {
  it('is contained within XvReact as CommonJS', function () {
    expect(XvReact).to.be.an('object');
  });

  it('XvReact contained basic namespaces', function () {
    expect(XvReact.Core).to.be.an('object');
    expect(XvReact.Core.Net.Request).to.be.an('function');
  });


});
