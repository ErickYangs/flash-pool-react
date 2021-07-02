import request from './request'
import { AxiosResponse } from 'axios'
import { ApiResponse } from '../type/api'

/**
 *
 * get transaction list by hash
 */

export const getTransactionList = async (hash: string): Promise<any> => {
  const { data }: AxiosResponse<ApiResponse<object>> = await request({
    url: '/common/transaction-state/' + hash,
    method: 'GET',
  })
  if (data.error !== 0) {
    throw new Error(data.desc)
  }
  return data.result
}
