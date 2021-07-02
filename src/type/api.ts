export interface ApiResponse<Result> {
  error: number
  desc: string
  result: Result
}

interface AssetLabel {
  contractAddress: string
  decimal: number
  name: string
}

export interface LoadAssetsType {
  [index: number]: AssetLabel
}

export interface PageParams {
  pageNumber: number
  pageSize: number
}

interface liquidateListType {
  address: string
  borrowLimitUsed: number
  collateralInfo: string
  debt: string
  debtAmount: string
  debtIcon: string
  debtPrice: number
  id: number
  totalCollateral: string
}

export interface LiquidateResponse {
  count: number
  list: Array<liquidateListType>
  maxLiquidation: string
}

export interface addressType {
  address: string
}

export interface OverviewDataType {
  allMarket: Array<object>
  borrowLimit: string
  currentBorrow: Array<object>
  currentInsurance: Array<object>
  currentSupply: Array<object>
  netApy: string
  wingEarned: string
}

export interface PoolInfoType {
  totalBorrow: string
  totalLockedWingBalance: string
  totalLockedWingDollar: string
  totalSupply: string
  totalValidBorrow: string
  totalWingInsuranceBalance: string
  totalWingInsuranceDollar: string
}

interface WingApyListType {
  assetName: string
  borrowApy: string
  supplyApy: string
}

export interface ApyResultType {
  insuranceApy: string
  wingApyList: Array<WingApyListType>
}
