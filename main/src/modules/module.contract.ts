import {AbiItem} from "web3-utils";
import {Contract} from "web3-eth-contract"
import Web3 from "web3"
import {ACCOUNT_ADDRESS} from "../constants"
import IpfsDataSaver from "../../../contract/build/contracts/IpfsDataSaver.json";
import {TransactionReceipt} from "web3-core";


class SmartContract {
    private readonly instance: Contract
    private readonly web3: Web3

    constructor() {
        this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        this.instance = new this.web3.eth.Contract(IpfsDataSaver.abi as AbiItem[], IpfsDataSaver.networks['4447'].address, {from: ACCOUNT_ADDRESS})
    }

    async saveData(data: string): Promise<TransactionReceipt> {
        return this.instance.methods.saveData(data).send()

    }

    readData(): Promise<string> {
        return this.instance.methods.ipfsData().call()
    }
}

export default SmartContract
