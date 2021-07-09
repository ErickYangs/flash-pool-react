import React, { useEffect, useState } from 'react'
import { BaseButton, ButtonType } from '../../components/Button'
import { BaseCheckBox } from '../../components/CheckBox'
import { NavArea } from '../../components/Nav'
import { Card } from 'antd'

const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513'
const tokenSymbol = 'TUT'
const tokenDecimals = 18
const tokenImage = 'http://placekitten.com/200/300'

declare const window: any

export const HomePage: React.FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false)
  const handlerLog = () => {
    console.log(111111)
  }

  const handlerAddToken = async () => {
    console.log('window', window)
    // return ''
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    })
    console.log('wasAdded', wasAdded)
    if (wasAdded) {
      console.log('Thanks for your interest!')
    } else {
      console.log('Your loss!')
    }
  }

  const handlerSwitchWork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x64' }],
      })
    } catch (switchError) {
        console.log('switchError', switchError);
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: '0x64',
                    chainName: 'xDAI Chain',
                    rpcUrls: ['https://dai.poa.network'],
                    iconUrls: [
                        'https://xdaichain.com/fake/example/url/xdai.svg',
                        'https://xdaichain.com/fake/example/url/xdai.png',
                    ],
                    nativeCurrency: {
                        name: 'xDAI',
                        symbol: 'xDAI',
                        decimals: 18,
                    },
                },
            ],
          })
        } catch (addError) {
            throw addError
        }
      }
    }
  }
  useEffect(() => {
    console.log('isCheck', isCheck)
  }, [isCheck])
  return (
    <div>
      <BaseButton onClick={handlerLog} type={ButtonType.Go} label={'Submit'} />
      <BaseCheckBox checked={isCheck} onCheck={setIsCheck} />
      <NavArea />
      {/* <Card>
        <BaseButton onClick={handlerAddToken} type={ButtonType.Submit}>
          Add Token
        </BaseButton>
      </Card>
      <Card>
        <BaseButton onClick={handlerSwitchWork} type={ButtonType.Submit}>
          Add Network
        </BaseButton>
      </Card> */}
    </div>
  )
}
