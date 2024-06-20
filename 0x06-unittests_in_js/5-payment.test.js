const sinon = require("sinon");
const { expect } = require('chai');

const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

let logSpy;

afterEach(() => {
	// Restore the default sandbox here
	sinon.restore();
});

beforeEach(() => {
	logSpy = sinon.spy(console, 'log');
})

describe("sendPaymentRequestToApi", () => {
	it("call sendPaymentRequestToAPI with 100, and 20", () => {
		sendPaymentRequestToApi(100, 20);
		expect(logSpy.calledWith('The total is: 120')).to.be.true;
	});
	it("call sendPaymentRequestToAPI with 10, and 10", () => {
		sendPaymentRequestToApi(10, 10);
		expect(logSpy.calledWith('The total is: 20')).to.be.true;
	});
});
