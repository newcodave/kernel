import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type UserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    callGasLimit: PromiseOrValue<BigNumberish>;
    verificationGasLimit: PromiseOrValue<BigNumberish>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    maxFeePerGas: PromiseOrValue<BigNumberish>;
    maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface ZeroDevSessionKeyPluginInterface extends utils.Interface {
    functions: {
        "parseDataAndSignature(bytes)": FunctionFragment;
        "revokeSessionKey(address)": FunctionFragment;
        "revoked(address)": FunctionFragment;
        "sessionNonce(address)": FunctionFragment;
        "validatePluginData((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "parseDataAndSignature" | "revokeSessionKey" | "revoked" | "sessionNonce" | "validatePluginData"): FunctionFragment;
    encodeFunctionData(functionFragment: "parseDataAndSignature", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "revokeSessionKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revoked", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sessionNonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validatePluginData", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "parseDataAndSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeSessionKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revoked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sessionNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatePluginData", data: BytesLike): Result;
    events: {
        "SessionKeyRevoked(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SessionKeyRevoked"): EventFragment;
}
export interface SessionKeyRevokedEventObject {
    key: string;
}
export type SessionKeyRevokedEvent = TypedEvent<[
    string
], SessionKeyRevokedEventObject>;
export type SessionKeyRevokedEventFilter = TypedEventFilter<SessionKeyRevokedEvent>;
export interface ZeroDevSessionKeyPlugin extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ZeroDevSessionKeyPluginInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        parseDataAndSignature(_packed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
            data: string;
            signature: string;
        }>;
        revokeSessionKey(_key: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revoked(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        sessionNonce(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        validatePluginData(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    parseDataAndSignature(_packed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
        data: string;
        signature: string;
    }>;
    revokeSessionKey(_key: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revoked(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    sessionNonce(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    validatePluginData(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        parseDataAndSignature(_packed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
            data: string;
            signature: string;
        }>;
        revokeSessionKey(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revoked(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        sessionNonce(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        validatePluginData(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "SessionKeyRevoked(address)"(key?: PromiseOrValue<string> | null): SessionKeyRevokedEventFilter;
        SessionKeyRevoked(key?: PromiseOrValue<string> | null): SessionKeyRevokedEventFilter;
    };
    estimateGas: {
        parseDataAndSignature(_packed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeSessionKey(_key: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revoked(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        sessionNonce(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        validatePluginData(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        parseDataAndSignature(_packed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeSessionKey(_key: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revoked(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sessionNonce(_key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatePluginData(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
