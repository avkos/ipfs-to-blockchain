import * as IPFS from "ipfs-core";

class IpfsNode {
    async uploadToIpfs(data: Buffer): Promise<any> {
        const ipfs = await IPFS.create();
        const {cid} = await ipfs.add(data);

        return String(cid)
    }

    shutdown(): void {
        // ipfs doesn't have graceful shutdown yet ((
        setTimeout(() => {
            process.exit(0)
        }, 5000)
    }
}

export default IpfsNode
