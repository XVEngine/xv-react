var expect = require('chai').expect;
var XvReact = require('../dist/XvReact.min.js');

describe('XvReact Services', function () {
  it('has Container', function () {
    expect(XvReact).to.be.an('object');
    expect(XvReact.Container).to.be.an('function');
    expect(XvReact.Container()).to.be.an('object');
    expect(XvReact.Container().hasService).to.be.an('function');
  });

  var services = [
      'xv.core.net.request',
      'xv.core.handler.request'
  ];
  services.forEach((value ) => {
    it('XvReact Container contained '+value, function () {
      expect(XvReact.Container().hasService(value)).to.be.equal(true);
    });
  });



});
