const sinon = require("sinon");
const { expect } = require('chai');

const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

afterEach(() => {
	// Restore the default sandbox here
	sinon.restore();
});

describe("sendPaymentRequestToApi", () => {
	it("should equal same as original function [BASE]", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const oldFunction = sinon.spy(calculateNumber);
		sendPaymentRequestToApi(100, 200);
		oldFunction("SUM", 100, 200);
		expect(newFunction.calledOnce).to.be.true;
		expect(oldFunction.calledOnce).to.be.true;
		expect(newFunction.firstCall.returnValue).to.be
			.equal(oldFunction.firstCall.returnValue);
	});

	it("should equal same as original function [console.log]", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const logFunction = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 200);
		expect(newFunction.calledOnce).to.be.true;
		expect(logFunction.calledOnce).to.be.true;
		expect(newFunction.firstCall.returnValue).to.be.equal(300);
		expect(logFunction.firstCall.args.length).to.be.equal(1);
		expect(logFunction.firstCall.args[0]).to.be.equal(`The total is: ${300}`);
	});

	it("should equal same as original function [EDGE]", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const oldFunction = sinon.spy(calculateNumber);
		sendPaymentRequestToApi(100.299999999999, 200.4999999999999);
		oldFunction("SUM", 100.299999999999, 200.4999999999999);
		expect(newFunction.calledOnce).to.be.true;
		expect(oldFunction.calledOnce).to.be.true;
		expect(newFunction.firstCall.returnValue).to.be
			.equal(oldFunction.firstCall.returnValue);
	});
})
