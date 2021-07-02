import request from './request'
import { AxiosResponse } from 'axios'
import {
  ApiResponse,
  addressType,
  OverviewDataType,
  PoolInfoType,
  ApyResultType,
} from '../type/api'

/***
 *
 * get all markets
 * if address, or get markets info of user
 *
 */

export const fetchAllMarkets = async (arg: addressType): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<OverviewDataType>> = await request({
    url: '/flash-pool/overview',
    method: 'POST',
    data: arg,
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}

/*
 *
 * get pool of all data info
 *
 * */

export const getPoolDetail = async (): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<PoolInfoType>> = await request({
    url: '/flash-pool/detail',
    method: 'GET',
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}

/**
 * get assets apy
 */
export const getPoolApy = async (): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<ApyResultType>> = await request({
    url: '/flash-pool/apy',
    method: 'GET',
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}

/**
 * getTokenPrice
 * */

export const getTokenPrice = async (): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<object>> = await request({
    url: '/common/token/price',
    method: 'GET',
  })

  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}
