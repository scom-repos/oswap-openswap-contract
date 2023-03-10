// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import '../commons/interfaces/IOSWAP_PairCreator.sol';
import './OSWAP_RestrictedPair4.sol';

contract OSWAP_RestrictedPairCreator4 is IOSWAP_PairCreator {
    function createPair(bytes32 salt) external override returns (address pair) {
        bytes memory bytecode = type(OSWAP_RestrictedPair4).creationCode;
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        return pair;
    }
}

