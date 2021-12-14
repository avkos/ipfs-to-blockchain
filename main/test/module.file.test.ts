import assert from 'assert'
import {describe, it} from 'mocha'
import {expect} from 'chai'
import File from '../src/modules/module.file'

describe('Load file', function () {
    it('should return file data', function () {
        const file = new File('.gitignore')
        const data = file.getFileData()

        assert.equal('node_modules\n', data.toString());
    });
    it('should return error', function () {
        const file = new File('not_exists')
        expect(file.getFileData).to.throw('Read file error');
    });
});
