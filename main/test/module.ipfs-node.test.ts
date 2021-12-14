import assert from 'assert'
import {describe, it} from 'mocha'
import IpfsNode from '../src/modules/module.ipfs-node'
import File from '../src/modules/module.file'

describe('Ipfs upload file', function () {
    it('should return cid after upload', async function () {
        const ipfs = new IpfsNode()
        const file = new File('.gitignore')

        const cid = await ipfs.uploadToIpfs(file.getFileData())
        ipfs.shutdown()
        assert.equal(typeof cid, 'string');
    });
});
