pragma solidity ^0.5.16;

contract IpfsDataSaver {
    string public ipfsData;

    event DataSaved(bool isSaved, string data);

    function saveData(string memory _data) public {
        ipfsData = _data;
        emit DataSaved(true, ipfsData);
    }

}
