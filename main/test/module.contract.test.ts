import assert from 'assert'
import {describe, it} from 'mocha'
import Contract from '../src/modules/module.contract'

describe('Check contract', function () {
    it('check if data saved correctly', async function () {
        const contract = new Contract()
        const testData = 'test'
        await contract.saveData(testData)
        const dataInContract = await contract.readData()
        assert.equal(dataInContract, testData);
    });
});
