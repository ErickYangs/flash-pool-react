export enum OTokenFloat {
  pWING = 9,
  ETH = 18,
  WBTC = 8,
  pONT = 9,
  USDT = 6,
  oneWING = 9,
  UST = 18,
  USDC = 6,
  DAI = 18,
  xICHI = 9,
}

export const FTokenContract = {
  pWING: process.env.VUE_APP_FToken_pWING,
  ETH: process.env.VUE_APP_FToken_ETH,
  WBTC: process.env.VUE_APP_FToken_WBTC,
  pONT: process.env.VUE_APP_FToken_pONT,
  USDT: process.env.VUE_APP_FToken_USDT,
  oneWING: process.env.VUE_APP_FToken_oneWING,
  UST: process.env.VUE_APP_FToken_UST,
  USDC: process.env.VUE_APP_FToken_USDC,
  DAI: process.env.VUE_APP_FToken_DAI,
  xICHI: process.env.VUE_APP_FToken_xICHI,
}

export const OTokenContract = {
  pWING: process.env.VUE_APP_OToken_pWING,
  ETH: process.env.VUE_APP_OToken_ETH,
  WBTC: process.env.VUE_APP_OToken_WBTC,
  pONT: process.env.VUE_APP_OToken_pONT,
  USDT: process.env.VUE_APP_OToken_USDT,
  oneWING: process.env.VUE_APP_OToken_oneWING,
  UST: process.env.VUE_APP_OToken_UST,
  USDC: process.env.VUE_APP_OToken_USDC,
  DAI: process.env.VUE_APP_OToken_DAI,
  xICHI: process.env.VUE_APP_OToken_xICHI,
}

export const InsureContract = {
  pWING: process.env.VUE_APP_Insure_pWING,
}

export const comptrollerAddress = process.env.VUE_APP_ComptrollerAddress

export const CacheName = {
  Login: 'wing-login-address',
}
