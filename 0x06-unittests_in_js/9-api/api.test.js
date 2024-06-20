const { expect } = require('chai');
const request = require('request');

const HOST = 'http://localhost';
const PORT = ':7865';

describe('Api Request', () => {
  it('should resolve correctly at endpoint: "/"', (done) => {
    request.get(HOST + PORT, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('should resolve 404 at endpoint: "/any"', (done) => {
    const endpoint = '/any';
    request.get(HOST + PORT + endpoint, (error, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('should resolve correctly at endpoint: "/cart/3"', (done) => {
    const endpoint = '/cart/3'
    request.get(HOST + PORT + endpoint, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 3');
      done();
    });
  });
  it('should resolve 404 at endpoint: "/cart/d"', (done) => {
    const endpoint = '/cart/d';
    request.get(HOST + PORT + endpoint, (error, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
