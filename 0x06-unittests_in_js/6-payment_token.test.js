const sinon = require("sinon");
const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

afterEach(() => {
	// Restore the default sandbox here
	sinon.restore();
});

const asyncWrap = async (callback, value) => {
	await callback(value);
}

describe('getPaymentTokenFromAPI', () => {
	it("should return {data: 'Successful response from the API' }", async () => {
		const asyncFunctionSpy = sinon.spy(getPaymentTokenFromAPI);
		await asyncWrap(asyncFunctionSpy, true);
		expect(asyncFunctionSpy.calledWith(true)).to.be.true;
		expect(await asyncFunctionSpy.firstCall.returnValue).to.deep.equal({
			data: 'Successful response from the API'
		});
	});
})
