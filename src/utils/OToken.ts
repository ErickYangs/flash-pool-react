// @ts-ignore
import { getMinus, getTimes, getPlus } from './utils/count.js'
import { OTokenType } from '../type/token'
class OToken {
  public icon: string
  public name: string
  public walletBalance: string
  public supplyApy: string
  public isCollateral: boolean
  public borrowApy: string
  public borrowLiquidity: string
  public insuranceAmount: string
  public insuranceBalance: string
  public insuranceDollar: string
  public distribution: string
  public supplyBalance: string
  public supplyBalanceDollar: string
  public collateralRate: string
  public price: string
  public borrowWingApy: string
  public insuranceWingApy: string
  public supplyWingApy: string
  public earnedWing: string
  public lockedWing: string
  public borrowBalance: string
  public borrowBalanceLocked: string
  public borrowBalanceUnLocked: string
  public borrowBalanceDollar: string
  public borrowBalanceLockedDollar: string
  public borrowBalanceUnLockedDollar: string
  public borrowLiquidityDollar: string
  public totalSupplyApr: string
  public totalBorrowApr: string
  constructor(OTokenType: OTokenType) {
    this.icon = OTokenType.icon
    this.name = OTokenType.name
    this.walletBalance = OTokenType.walletBalance || '0'
    this.supplyApy = OTokenType.supplyApy || '0'
    this.isCollateral = OTokenType.isCollateral
    this.borrowApy = OTokenType.borrowApy || '0'
    this.borrowLiquidity = OTokenType.borrowLiquidity || '0'
    this.insuranceAmount = OTokenType.insuranceAmount || '0'
    this.insuranceBalance = OTokenType.insuranceBalance || '0'
    this.insuranceDollar = OTokenType.insuranceDollar || '0'
    this.distribution = OTokenType.distribution || '0'
    this.supplyBalance = OTokenType.supplyBalance || '0'
    this.supplyBalanceDollar = OTokenType.supplyBalanceDollar || '0'
    this.collateralRate = OTokenType.collateralRate || '0'
    this.price = OTokenType.price || '0'
    this.borrowWingApy = OTokenType.borrowWingApy || '0'
    this.insuranceWingApy = OTokenType.insuranceWingApy || '0'
    this.supplyWingApy = OTokenType.supplyWingApy || '0'
    this.earnedWing = OTokenType.earnedWing || '0'
    this.lockedWing = OTokenType.lockedWing || '0'
    this.borrowBalance = OTokenType.borrowBalance || '0'
    this.borrowBalanceLocked = OTokenType.borrowBalanceLocked || '0'
    this.borrowBalanceUnLocked = getMinus(
      this.borrowBalance,
      this.borrowBalanceLocked,
    )
    this.borrowBalanceDollar = getTimes(this.borrowBalance, this.price)
    this.borrowBalanceLockedDollar = getTimes(
      this.borrowBalanceLocked,
      this.price,
    )
    this.borrowBalanceUnLockedDollar = getTimes(
      this.borrowBalanceUnLocked,
      this.price,
    )
    this.borrowLiquidityDollar = getTimes(this.borrowLiquidity, this.price)
    this.totalSupplyApr = getPlus(this.supplyApy, this.supplyWingApy)
    this.totalBorrowApr = getMinus(this.borrowWingApy, this.borrowApy)
  }
}

export default OToken
