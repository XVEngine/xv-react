var expect = require('chai').expect;
var XvWeb = require('../dist/XvReact.js');

describe('XvWeb', function () {
  it('is contained within MyLib as CommonJS', function () {
    expect(XvWeb).to.be.an('object');
  });

});
