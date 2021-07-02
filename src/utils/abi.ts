export const supplyAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const ETHSupplyAbi =
  '{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}'

export const withDrawAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const withDrawRedeemUnder =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const withDrawAbiETH =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const withDrawRedeemUnderETH =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const insureAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const surrenderAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const surrenderAbiUnderlying =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const borrowAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"borrowAmount","type":"uint256"},{"internalType":"bool","name":"useWing","type":"bool"}],"name":"borrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const repayBorrowAbi =
  '{"constant":false,"inputs":[{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const repayBorrowAbiETH =
  '{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}'

export const repayBorrowAbiETHAll =
  '{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"}],"name":"repayBehalfExplicit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}'

export const ERC20_ABI =
  '[{"inputs":[{"internalType":"address","name":"lockProxyContractAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'

export const fTokenBalanceOfAbi =
  '{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}'

export const enterMarketsAbi =
  '{"constant":false,"inputs":[{"internalType":"address[]","name":"cTokens","type":"address[]"}],"name":"enterMarkets","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const exitMarketAbi =
  '{"constant":false,"inputs":[{"internalType":"address","name":"cTokenAddress","type":"address"}],"name":"exitMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const insureClaimPwing =
  '{"constant":false,"inputs":[{"internalType":"address payable","name":"holder","type":"address"}],"name":"claimComp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const insureClaimAll =
  '{"constant":false,"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"},{"internalType":"bool","name":"borrowers","type":"bool"},{"internalType":"bool","name":"suppliers","type":"bool"}],"name":"claimComp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const liquidateABI =
  '{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"},{"internalType":"contract CTokenInterface","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}'

export const liquidateETHABI =
  '{"constant":false,"inputs":[{"internalType":"address","name":"borrower","type":"address"},{"internalType":"contract CToken","name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}'
