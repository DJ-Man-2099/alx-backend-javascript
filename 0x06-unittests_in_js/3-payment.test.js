const sinon = require("sinon");
const referee = require("@sinonjs/referee");
const assert = referee.assert;

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
		assert(newFunction.calledOnce);
		assert(oldFunction.calledOnce);
		assert.equals(newFunction.firstCall.returnValue,
			oldFunction.firstCall.returnValue);
	});

	it("should equal same as original function [console.log]", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const oldFunction = sinon.spy(calculateNumber);
		const logFunction = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100.299999999999, 200.4999999999999);
		oldFunction("SUM", 100.299999999999, 200.4999999999999);
		assert(newFunction.calledOnce);
		assert(oldFunction.calledOnce);
		assert(logFunction.calledOnce);
		assert.equals(newFunction.firstCall.returnValue,
			oldFunction.firstCall.returnValue);
		assert.equals(logFunction.firstCall.args.length, 1);
		assert.equals(logFunction.firstCall.args[0],
			`The total is: ${oldFunction.firstCall.returnValue}`);
	});

	it("should equal same as original function [EDGE]", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const oldFunction = sinon.spy(calculateNumber);
		sendPaymentRequestToApi(100.299999999999, 200.4999999999999);
		oldFunction("SUM", 100.299999999999, 200.4999999999999);
		assert(newFunction.calledOnce);
		assert(oldFunction.calledOnce);
		assert.equals(newFunction.firstCall.returnValue,
			oldFunction.firstCall.returnValue);
	});
})
