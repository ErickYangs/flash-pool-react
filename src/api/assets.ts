import request from './request'
import { ApiResponse, LoadAssetsType } from '../type/api'
import { AxiosResponse } from 'axios'

/**
 * get user balance of assets
 *
 * */
export const getUserAssets = async (
  arg: LoadAssetsType,
  address: string,
): Promise<any> => {
  if (!arg || !address) {
    throw new Error('Params error')
  }
  const { data }: AxiosResponse<ApiResponse<object>> = await request({
    url: `/flash-pool/asset?address=${address}`,
    method: 'POST',
    data: arg,
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}
