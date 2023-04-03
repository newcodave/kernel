"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroDevSessionKeyPlugin__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "key",
                type: "address",
            },
        ],
        name: "SessionKeyRevoked",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_packed",
                type: "bytes",
            },
        ],
        name: "parseDataAndSignature",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_key",
                type: "address",
            },
        ],
        name: "revokeSessionKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_key",
                type: "address",
            },
        ],
        name: "revoked",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_key",
                type: "address",
            },
        ],
        name: "sessionNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validatePluginData",
        outputs: [
            {
                internalType: "bool",
                name: "validated",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6101406040523480156200001257600080fd5b506040518060400160405280601781526020017f5a65726f44657653657373696f6e4b6579506c7567696e0000000000000000008152506040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000e88184846200013760201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505080610120818152505050505050506200024b565b6000838383463060405160200162000154959493929190620001ee565b6040516020818303038152906040528051906020012090509392505050565b6000819050919050565b620001888162000173565b82525050565b6000819050919050565b620001a3816200018e565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001d682620001a9565b9050919050565b620001e881620001c9565b82525050565b600060a0820190506200020560008301886200017d565b6200021460208301876200017d565b6200022360408301866200017d565b62000232606083018562000198565b620002416080830184620001dd565b9695505050505050565b60805160a05160c05160e0516101005161012051611f0e6200029b6000396000610c7c01526000610cbe01526000610c9d01526000610bd201526000610c2801526000610c510152611f0e6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636d0ae0461461005c57806384f4fc6a1461008c578063970aa9ad146100a85780639e2045ce146100db578063fa01dc061461010b575b600080fd5b610076600480360381019061007191906110a2565b61013b565b60405161008391906110e8565b60405180910390f35b6100a660048036038101906100a191906110a2565b61018d565b005b6100c260048036038101906100bd9190611168565b610234565b6040516100d29493929190611213565b60405180910390f35b6100f560048036038101906100f091906112d5565b610447565b604051610102919061135f565b60405180910390f35b610125600480360381019061012091906110a2565b610513565b604051610132919061135f565b60405180910390f35b6000610145610572565b60010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6001610197610572565b60000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f17c796fb82086b3c9effaec517342e5ca9ed8fd78c339137ec082f748ab60cbe60405160405180910390a250565b36600036600080868660009060209261024f93929190611384565b9061025a91906113d7565b60001c90506000878783906020856102729190611465565b9261027f93929190611384565b9061028a91906113d7565b60001c9050600088886020906040926102a593929190611384565b906102b091906113d7565b60001c90506000898983906020856102c89190611465565b926102d593929190611384565b906102e091906113d7565b60001c905089896020866102f49190611465565b90856020886103039190611465565b61030d9190611465565b9261031a93929190611384565b97509750898960208461032d9190611465565b908360208661033c9190611465565b6103469190611465565b9261035393929190611384565b95509550816020808561036691906114c8565b61037091906114f9565b60408661037d9190611465565b6103879190611465565b146103c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103be90611598565b60405180910390fd5b89899050602080836103d991906114c8565b6103e391906114f9565b6040846103f09190611465565b6103fa9190611465565b1461043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043190611604565b60405180910390fd5b5050505092959194509250565b6000366000366000610479888061014001906104639190611633565b606190809261047493929190611384565b610234565b935093509350935061048f8888868686866105b1565b945060008611156105085760003373ffffffffffffffffffffffffffffffffffffffff16876040516104c0906116c7565b60006040518083038185875af1925050503d80600081146104fd576040519150601f19603f3d011682016040523d82523d6000602084013e610502565b606091505b50509050505b505050509392505050565b600061051d610572565b60000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060017f6da8a1d7d4f224b5b2581a964c1890eb7e987638c691727e5a2a14ca24d03fd960001c6105a591906116dc565b60001b90508091505090565b60008085856000906014926105c893929190611384565b906105d3919061173c565b60601c90506105e0610572565b60000160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561066e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610665906117e7565b60405180910390fd5b876020013561067b610572565b60010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390611853565b60405180910390fd5b6000868660149060349261071293929190611384565b9061071d91906113d7565b905060008585600081811061073557610734611873565b5b9050013560f81c60f81b60f81c90506060600060148360ff160361085557878760019060159261076793929190611384565b9061077291906113d7565b90508787605690809261078793929190611384565b81019061079491906119e0565b915087876001906015926107aa93929190611384565b6040516107b8929190611a4e565b60405180910390208c80606001906107d09190611633565b6010906024926107e293929190611384565b6040516107f0929190611a4e565b604051809103902014610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f90611ab3565b60405180910390fd5b878760159060569261084c93929190611384565b97509750610971565b60188360ff160361096257878760019060199261087493929190611384565b9061087f91906113d7565b90508787605a90809261089493929190611384565b8101906108a191906119e0565b915087876001906019926108b793929190611384565b6040516108c5929190611a4e565b60405180910390208c80606001906108dd9190611633565b6010906028926108ef93929190611384565b6040516108fd929190611a4e565b604051809103902014610945576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093c90611ab3565b60405180910390fd5b8787601990605a9261095993929190611384565b97509750610970565b600095505050505050610b16565b5b61097c828583610b20565b61098e57600095505050505050610b16565b6000610a3f7ff0a98eef9608fd8bfe5833dfbc8b73ab86d0355db37a1f539565c5985ad1c2428d6109bd610572565b60010160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610a0e90611ad3565b91905055604051602001610a2493929190611b2a565b60405160208183030381529060405280519060200120610b37565b90506000610a9a8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505083610b5190919063ffffffff16565b90508673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0190611bad565b60405180910390fd5b60019750505050505050505b9695505050505050565b600082610b2d8584610b78565b1490509392505050565b6000610b4a610b44610bce565b83610ce8565b9050919050565b6000806000610b608585610d1b565b91509150610b6d81610d6c565b819250505092915050565b60008082905060005b8451811015610bc357610bae82868381518110610ba157610ba0611873565b5b6020026020010151610ed2565b91508080610bbb90611ad3565b915050610b81565b508091505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610c4a57507f000000000000000000000000000000000000000000000000000000000000000046145b15610c77577f00000000000000000000000000000000000000000000000000000000000000009050610ce5565b610ce27f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610efd565b90505b90565b60008282604051602001610cfd929190611c45565b60405160208183030381529060405280519060200120905092915050565b6000806041835103610d5c5760008060006020860151925060408601519150606086015160001a9050610d5087828585610f37565b94509450505050610d65565b60006002915091505b9250929050565b60006004811115610d8057610d7f611c7c565b5b816004811115610d9357610d92611c7c565b5b0315610ecf5760016004811115610dad57610dac611c7c565b5b816004811115610dc057610dbf611c7c565b5b03610e00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df790611cf7565b60405180910390fd5b60026004811115610e1457610e13611c7c565b5b816004811115610e2757610e26611c7c565b5b03610e67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5e90611d63565b60405180910390fd5b60036004811115610e7b57610e7a611c7c565b5b816004811115610e8e57610e8d611c7c565b5b03610ece576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec590611df5565b60405180910390fd5b5b50565b6000818310610eea57610ee58284611019565b610ef5565b610ef48383611019565b5b905092915050565b60008383834630604051602001610f18959493929190611e24565b6040516020818303038152906040528051906020012090509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610f72576000600391509150611010565b600060018787878760405160008152602001604052604051610f979493929190611e93565b6020604051602081039080840390855afa158015610fb9573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361100757600060019250925050611010565b80600092509250505b94509492505050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061106f82611044565b9050919050565b61107f81611064565b811461108a57600080fd5b50565b60008135905061109c81611076565b92915050565b6000602082840312156110b8576110b761103a565b5b60006110c68482850161108d565b91505092915050565b6000819050919050565b6110e2816110cf565b82525050565b60006020820190506110fd60008301846110d9565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261112857611127611103565b5b8235905067ffffffffffffffff81111561114557611144611108565b5b6020830191508360018202830111156111615761116061110d565b5b9250929050565b6000806020838503121561117f5761117e61103a565b5b600083013567ffffffffffffffff81111561119d5761119c61103f565b5b6111a985828601611112565b92509250509250929050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006111f283856111b5565b93506111ff8385846111c6565b611208836111d5565b840190509392505050565b6000604082019050818103600083015261122e8186886111e6565b905081810360208301526112438184866111e6565b905095945050505050565b600080fd5b6000610160828403121561126a5761126961124e565b5b81905092915050565b6000819050919050565b61128681611273565b811461129157600080fd5b50565b6000813590506112a38161127d565b92915050565b6112b2816110cf565b81146112bd57600080fd5b50565b6000813590506112cf816112a9565b92915050565b6000806000606084860312156112ee576112ed61103a565b5b600084013567ffffffffffffffff81111561130c5761130b61103f565b5b61131886828701611253565b935050602061132986828701611294565b925050604061133a868287016112c0565b9150509250925092565b60008115159050919050565b61135981611344565b82525050565b60006020820190506113746000830184611350565b92915050565b600080fd5b600080fd5b600080858511156113985761139761137a565b5b838611156113a9576113a861137f565b5b6001850283019150848603905094509492505050565b600082905092915050565b600082821b905092915050565b60006113e383836113bf565b826113ee8135611273565b9250602082101561142e576114297fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026113ca565b831692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611470826110cf565b915061147b836110cf565b925082820190508082111561149357611492611436565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006114d3826110cf565b91506114de836110cf565b9250826114ee576114ed611499565b5b828204905092915050565b6000611504826110cf565b915061150f836110cf565b925082820261151d816110cf565b9150828204841483151761153457611533611436565b5b5092915050565b600082825260208201905092915050565b7f696e76616c696420646174610000000000000000000000000000000000000000600082015250565b6000611582600c8361153b565b915061158d8261154c565b602082019050919050565b600060208201905081810360008301526115b181611575565b9050919050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b60006115ee60118361153b565b91506115f9826115b8565b602082019050919050565b6000602082019050818103600083015261161d816115e1565b9050919050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126116505761164f611624565b5b80840192508235915067ffffffffffffffff82111561167257611671611629565b5b60208301925060018202360383131561168e5761168d61162e565b5b509250929050565b600081905092915050565b50565b60006116b1600083611696565b91506116bc826116a1565b600082019050919050565b60006116d2826116a4565b9150819050919050565b60006116e7826110cf565b91506116f2836110cf565b925082820390508181111561170a57611709611436565b5b92915050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600061174883836113bf565b826117538135611710565b925060148210156117935761178e7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000836014036008026113ca565b831692505b505092915050565b7f73657373696f6e206b6579207265766f6b656400000000000000000000000000600082015250565b60006117d160138361153b565b91506117dc8261179b565b602082019050919050565b60006020820190508181036000830152611800816117c4565b9050919050565b7f6e6f6e6365206d69736d61746368000000000000000000000000000000000000600082015250565b600061183d600e8361153b565b915061184882611807565b602082019050919050565b6000602082019050818103600083015261186c81611830565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6118da826111d5565b810181811067ffffffffffffffff821117156118f9576118f86118a2565b5b80604052505050565b600061190c611030565b905061191882826118d1565b919050565b600067ffffffffffffffff821115611938576119376118a2565b5b602082029050602081019050919050565b600061195c6119578461191d565b611902565b9050808382526020820190506020840283018581111561197f5761197e61110d565b5b835b818110156119a857806119948882611294565b845260208401935050602081019050611981565b5050509392505050565b600082601f8301126119c7576119c6611103565b5b81356119d7848260208601611949565b91505092915050565b6000602082840312156119f6576119f561103a565b5b600082013567ffffffffffffffff811115611a1457611a1361103f565b5b611a20848285016119b2565b91505092915050565b6000611a358385611696565b9350611a428385846111c6565b82840190509392505050565b6000611a5b828486611a29565b91508190509392505050565b7f696e76616c69642073657373696f6e206b657900000000000000000000000000600082015250565b6000611a9d60138361153b565b9150611aa882611a67565b602082019050919050565b60006020820190508181036000830152611acc81611a90565b9050919050565b6000611ade826110cf565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b1057611b0f611436565b5b600182019050919050565b611b2481611273565b82525050565b6000606082019050611b3f6000830186611b1b565b611b4c6020830185611b1b565b611b5960408301846110d9565b949350505050565b7f6163636f756e743a20696e76616c6964207369676e6174757265000000000000600082015250565b6000611b97601a8361153b565b9150611ba282611b61565b602082019050919050565b60006020820190508181036000830152611bc681611b8a565b9050919050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611c0e600283611bcd565b9150611c1982611bd8565b600282019050919050565b6000819050919050565b611c3f611c3a82611273565b611c24565b82525050565b6000611c5082611c01565b9150611c5c8285611c2e565b602082019150611c6c8284611c2e565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611ce160188361153b565b9150611cec82611cab565b602082019050919050565b60006020820190508181036000830152611d1081611cd4565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611d4d601f8361153b565b9150611d5882611d17565b602082019050919050565b60006020820190508181036000830152611d7c81611d40565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ddf60228361153b565b9150611dea82611d83565b604082019050919050565b60006020820190508181036000830152611e0e81611dd2565b9050919050565b611e1e81611064565b82525050565b600060a082019050611e396000830188611b1b565b611e466020830187611b1b565b611e536040830186611b1b565b611e6060608301856110d9565b611e6d6080830184611e15565b9695505050505050565b600060ff82169050919050565b611e8d81611e77565b82525050565b6000608082019050611ea86000830187611b1b565b611eb56020830186611e84565b611ec26040830185611b1b565b611ecf6060830184611b1b565b9594505050505056fea2646970667358221220e27503c0d573330854029b4b87427b5a7273eef93364cbcb504aba90dcd7c67764736f6c63430008120033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ZeroDevSessionKeyPlugin__factory = exports.ZeroDevSessionKeyPlugin__factory = /** @class */ (function (_super) {
    __extends(ZeroDevSessionKeyPlugin__factory, _super);
    function ZeroDevSessionKeyPlugin__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    ZeroDevSessionKeyPlugin__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ZeroDevSessionKeyPlugin__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ZeroDevSessionKeyPlugin__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ZeroDevSessionKeyPlugin__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ZeroDevSessionKeyPlugin__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ZeroDevSessionKeyPlugin__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ZeroDevSessionKeyPlugin__factory.bytecode = _bytecode;
    ZeroDevSessionKeyPlugin__factory.abi = _abi;
    return ZeroDevSessionKeyPlugin__factory;
}(ethers_1.ContractFactory));
