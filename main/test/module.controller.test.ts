import assert from 'assert'
import {describe, it} from 'mocha'
import Contract from '../src/modules/module.contract'

describe('Test controller', function () {
    it('check run', async function () {
        const contract = new Contract()
        const testData = 'test'
        await contract.saveData(testData)
        const dataInContract = await contract.readData()
        assert.equal(dataInContract, testData);
    });
});
