import request from './request'
import { ApiResponse, LiquidateResponse, PageParams } from '../type/api'
import { AxiosResponse } from 'axios'

/**
 * query liquidate assets list
 *
 * */
export const queryLiquidateList = async (arg: PageParams): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<LiquidateResponse>> = await request(
    {
      url: '/flash-pool/liquidate/list',
      method: 'POST',
      data: arg,
    },
  )
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}

/**
 *
 * query select assets list
 * */

export const queryLiquidateAsset = async () => {
  const { data }: AxiosResponse<ApiResponse<Array<string>>> = await request({
    url: '/flash-pool/liquidate/asset',
    method: 'GET',
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}
