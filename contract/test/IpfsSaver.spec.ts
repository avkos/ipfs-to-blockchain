const IpfsDataSaver = artifacts.require("IpfsDataSaver");
type TArgs = {
    isSaved: boolean,
    data: string
}
type TLog = {
    logIndex: number,
    transactionIndex: number,
    transactionHash: string,
    blockHash: string,
    blockNumber: number,
    address: string,
    type: string,
    event: string,
    args: TArgs
}


const getEventData = (logs: TLog[]): TArgs => {
    const log = logs.find(l => l.event === 'DataSaved')
    if (!log) {
        return {
            isSaved: false,
            data: ''
        }
    }
    return log.args
}

contract("IpfsDataSaver", ([deployer, user1]: string[]) => {
    it("should return correct event after save data", async () => {
        const ipfsData = 'shbdfusbdfisndfosndof'
        const ipfsDataSaver = await IpfsDataSaver.new({from: deployer});
        const result = await ipfsDataSaver.saveData(ipfsData);
        const eventData = getEventData(result.logs)
        assert.equal(eventData.data, ipfsData, 'ipfs data event error');
    });

    it("should return correct data from contract via public function", async () => {
        const ipfsData = 'shbdfusbdfisndfosndof'
        const ipfsDataSaver = await IpfsDataSaver.new({from: deployer});
        await ipfsDataSaver.saveData(ipfsData);
        const dataInContract = await ipfsDataSaver.ipfsData();
        assert.equal(ipfsData, dataInContract, 'ipfs data not equal');
    });
});
