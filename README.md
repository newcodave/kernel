# Optimism RetroPGF 4 Note

Kernel (original repo here: https://github.com/zerodevapp/kernel) is a modular smart contract acount developed by the amazing ZeroDev - Juniper does not develop or maintain this contract in any way (other than reporting bugs).

The whole point of Kernel is that a common set of battle tested contracts can be used by multiple projects, with the application developer simply implementing plugins or calling into the Kernel contract.

Juniper is not claiming credit for these contracts in any way, shape or form. This fork solely exists as documentation for RetroPGF 4 as it is the source code for the contracts we use. 

-- David Young, 5 June 2024


# Kernel

Kernel is a smart contract account that is:

- Compatible with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337).
- Modular (supports [ERC-7579 plugins](https://eips.ethereum.org/EIPS/eip-7579)).
- [Highly gas-efficient](https://github.com/zerodevapp/aa-benchmark).

Kernel is also a winner of [the inaugural Ethereum AA grant](https://erc4337.mirror.xyz/hRn_41cef8oKn44ZncN9pXvY3VID6LZOtpLlktXYtmA).  At the time of writing, [more than 50% of all ERC-4337 accounts run on Kernel.](https://www.bundlebear.com/factories/all).

## SDKs

Kernel is supported by all major AA SDKs, including:

- [ZeroDev](https://docs.zerodev.app/)
- [Permissionless.js](https://docs.pimlico.io/permissionless/how-to/accounts/use-kernel-account)
- [UserOp.js](https://docs.stackup.sh/docs/useropjs-presets#kernel)

## Plugins

- Read more about [Kernel's permissions system](https://docs.zerodev.app/sdk/permissions/intro) and learn to build your own plugins.
- For officially maintained plugins, some live in [this repo](https://github.com/zerodevapp/kernel-7579-plugins/tree/master), and the rest live in [`/src`](/src).

## Build

Make sure [Foundry](https://github.com/foundry-rs/foundry) is installed.  Then:

```
forge install
forge build
forge test
```

## License

MIT

## Addresses

<details>
<summary>v3.0</summary>

| Name                 | Address                                    |
| -------------------- | ------------------------------------------ |
| Meta Factory         | 0xd703aaE79538628d27099B8c4f621bE4CCd142d5 |
| Factory              | 0x6723b44Abeec4E71eBE3232BD5B455805baDD22f |
| Kernel               | 0x94F097E1ebEB4ecA3AAE54cabb08905B239A7D27 |
| ECDSA Validator      | 0x8104e3Ad430EA6d354d013A6789fDFc71E671c43 |

</details>

<details>
<summary>v2.4</summary>

| Name                 | Address                                    |
| -------------------- | ------------------------------------------ |
| Kernel               | 0xd3082872F8B06073A021b4602e022d5A070d7cfC |
| KernelFactory        | 0x5de4839a76cf55d0c90e2061ef4386d962E15ae3 |
| SessionKeyValidator  | 0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5 |
| ECDSA Validator      | 0xd9AB5096a832b9ce79914329DAEE236f8Eea0390 |
</details>

<details>
<summary>v2.3</summary>

| Name                 | Address                                    |
| -------------------- | ------------------------------------------ |
| Kernel               | 0xD3F582F6B4814E989Ee8E96bc3175320B5A540ab |
| KernelFactory        | 0x5de4839a76cf55d0c90e2061ef4386d962E15ae3 |
| KernelLite           | 0x482EC42E88a781485E1B6A4f07a0C5479d183291 |
| SessionKeyValidator  | 0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5 |
| ECDSA Validator      | 0xd9AB5096a832b9ce79914329DAEE236f8Eea0390 |
</details>

<details>
<summary>v2.2</summary>

| Name                 | Address                                    |
| -------------------- | ------------------------------------------ |
| Kernel               | 0x0DA6a956B9488eD4dd761E59f52FDc6c8068E6B5 |
| KernelFactory        | 0x5de4839a76cf55d0c90e2061ef4386d962E15ae3 |
| KernelLite           | 0xbEdb61Be086F3f15eE911Cc9AB3EEa945DEbFa96 |
| SessionKeyValidator  | 0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5 |
| ECDSA Validator      | 0xd9AB5096a832b9ce79914329DAEE236f8Eea0390 |

</details>

<details>
<summary>v2.1</summary>

| Name                 | Address                                    |
| -------------------- | ------------------------------------------ |
| Kernel               | 0xf048AD83CB2dfd6037A43902a2A5Be04e53cd2Eb |
| KernelFactory        | 0x5de4839a76cf55d0c90e2061ef4386d962E15ae3 |
| SessionKeyValidator  | 0x5C06CE2b673fD5E6e56076e40DD46aB67f5a72A5 |
| ECDSA Validator      | 0xd9AB5096a832b9ce79914329DAEE236f8Eea0390 |
</details>

<details>
<summary>v2.0</summary>

| Name            | Address                                    |
| --------------- | ------------------------------------------ |
| Kernel          | 0xeB8206E02f6AB1884cfEa58CC7BabdA7d55aC957 |
| TempKernel      | 0x727A10897e70cd3Ab1a6e43d59A12ab0895A4995 |
| KernelFactory   | 0x12358cA00141D09cB90253F05a1DD16bE93A8EE6 |
| ECDSA Validator | 0x180D6465F921C7E0DEA0040107D342c87455fFF5 |
| ECDSA Factory   | 0xAf299A1f51560F51A1F3ADC0a5991Ac74b61b0BE |
</details>
