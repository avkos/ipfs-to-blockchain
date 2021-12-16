import assert from 'assert'
import {describe, it} from 'mocha'
import {expect} from 'chai'
import File from '../src/modules/module.file'

describe('Load file', function () {
    it('should return file data', function () {
        const file = new File('./test/test.file')
        const data = file.getFileData()

        assert.equal('some text\n', data.toString());
    });
    it('should return error', function () {
        const file = new File('not_exists')
        expect(file.getFileData).to.throw('Read file error');
    });
});
