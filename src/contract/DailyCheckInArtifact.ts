export const DailyCheckInArtifact = {
    abi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "streak",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "CheckIn",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "checkIn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getLastCheckIn",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getStreak",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    bytecode: "0x6080604052348015600e575f5ffd5b506106178061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c8063183ff0851461004357806340195c851461004d5780635eeadb0d1461007d575b5f5ffd5b61004b6100ad565b005b610067600480360381019061006291906103fc565b6102df565b604051610074919061043f565b60405180910390f35b610097600480360381019061009291906103fc565b61033f565b6040516100a4919061043f565b60405180910390f35b5f5f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2090505f4290505f825f015f9054906101000a900465ffffffffffff1665ffffffffffff161461022c5762015180825f015f9054906101000a900465ffffffffffff1665ffffffffffff1661013e9190610485565b811015610180576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017790610512565b60405180910390fd5b6201518060026101909190610530565b825f015f9054906101000a900465ffffffffffff1665ffffffffffff166101b79190610485565b81106101e7576001825f0160066101000a81548164ffffffffff021916908364ffffffffff160217905550610227565b815f01600681819054906101000a900464ffffffffff168092919060010191906101000a81548164ffffffffff021916908364ffffffffff160217905550505b610252565b6001825f0160066101000a81548164ffffffffff021916908364ffffffffff1602179055505b80825f015f6101000a81548165ffffffffffff021916908365ffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167fb9cfea4717f167774a6e8643c33472935d3ef918453525eefca6936078b7cfdd835f0160069054906101000a900464ffffffffff16836040516102d39291906105ba565b60405180910390a25050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f015f9054906101000a900465ffffffffffff1665ffffffffffff169050919050565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f0160069054906101000a900464ffffffffff1664ffffffffff169050919050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6103cb826103a2565b9050919050565b6103db816103c1565b81146103e5575f5ffd5b50565b5f813590506103f6816103d2565b92915050565b5f602082840312156104115761041061039e565b5b5f61041e848285016103e8565b91505092915050565b5f819050919050565b61043981610427565b82525050565b5f6020820190506104525f830184610430565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61048f82610427565b915061049a83610427565b92508282019050808211156104b2576104b1610458565b5b92915050565b5f82825260208201905092915050565b7f416c726561647920636865636b656420696e20746f64617900000000000000005f82015250565b5f6104fc6018836104b8565b9150610507826104c8565b602082019050919050565b5f6020820190508181035f830152610529816104f0565b9050919050565b5f61053a82610427565b915061054583610427565b925082820261055381610427565b9150828204841483151761056a57610569610458565b5b5092915050565b5f64ffffffffff82169050919050565b5f819050919050565b5f6105a461059f61059a84610571565b610581565b610427565b9050919050565b6105b48161058a565b82525050565b5f6040820190506105cd5f8301856105ab565b6105da6020830184610430565b939250505056fea26469706673582212204debf0e2bb52d3177ac1e840c8b46d0e3a3dfaf3b0b2b78fde78dc0063f20bab64736f6c634300081f0033"
} as const;
