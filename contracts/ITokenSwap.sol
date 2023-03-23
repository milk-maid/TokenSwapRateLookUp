// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface ITokenSwap {

    function addAggregator(string calldata _tokenName, address _aggregatorAddress) external;

    function deleteAggregator(string calldata _tokenName) external;

        function getSwapTokenPrice(
        string calldata _fromToken, 
        string calldata _toToken,
        uint8 _decimals,
        int256 _amount
    ) external view returns (int256);
    
} 