const sinon = require("sinon");
const { expect } = require('chai');

const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

afterEach(() => {
	// Restore the default sandbox here
	sinon.restore();
});

describe("sendPaymentRequestToApi", () => {
	it("should equal same as original function [console.log]", () => {
		const newFunction = sinon.stub(Utils, 'calculateNumber').returns(10);
		const logFunction = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 200);
		expect(newFunction.calledOnce).to.be.true;
		expect(logFunction.calledOnce).to.be.true;
		expect(newFunction.firstCall.returnValue).to.be.equal(10);
		expect(logFunction.firstCall.args.length).to.be.equal(1);
		expect(logFunction.firstCall.args[0]).to.be.equal(`The total is: ${10}`);
	});
})
