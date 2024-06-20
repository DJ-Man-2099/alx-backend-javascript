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
	it("should equal same as original function", () => {
		const newFunction = sinon.spy(Utils, 'calculateNumber');
		const oldFunction = sinon.spy(calculateNumber);
		sendPaymentRequestToApi(100, 200);
		oldFunction("SUM", 100, 200);
		assert(newFunction.calledOnce);
		assert(oldFunction.calledOnce);
		assert.equals(newFunction.firstCall.returnValue,
			oldFunction.firstCall.returnValue);

	});
})
