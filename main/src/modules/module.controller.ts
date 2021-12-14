import ModuleFile from "./module.file";
import IpfsNode from "./module.ipfs-node";
import Contract from "./module.contract";
import console from "console";

class Controller {
    private file: ModuleFile
    private ipfs: IpfsNode
    private contract: Contract

    constructor() {
        this.file = new ModuleFile()
        this.ipfs = new IpfsNode()
        this.contract = new Contract()
    }

    async run() {
        try {
            console.log('Read file')
            const fileData = this.file.getFileData()

            console.log('Upload file data')
            const cid = await this.ipfs.uploadToIpfs(fileData)
            this.ipfs.shutdown()

            console.log(`Write cid ${cid} to the smart contract`)
            await this.contract.saveData(cid)
            console.log(`You have successfully saved this cid ${cid} to smart contract`)

            const readCid = await this.contract.readData();
            console.log(`You have successfully read this cid ${readCid} from smart contract`)
        } catch (e) {
            console.error('Error', e)
        }
    }
}
export default Controller
