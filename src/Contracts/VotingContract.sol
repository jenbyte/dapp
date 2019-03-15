pragma solidity >=0.4.22 <0.7.0;

contract Ballot {

    address public owner;

    struct Proposal {
        bytes32 name; 
        int voteCount;
    }

    struct Voter {
        bool voted;
    }

    mapping(address => Voter) public voters;

    Proposal[] public proposals;

    constructor(bytes32[] memory proposalName) public {
        owner = msg.sender;
        for(uint i = 0; i < proposalNames.length; i++) {
            // 'uint' = unassigned integer
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }))
        }
    }

}