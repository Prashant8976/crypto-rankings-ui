import { useRouter } from 'next/router'
import React from 'react'

const CoinListItem = ({coin}) => {
    const router=useRouter();
  return (
    <tr onClick={() => router.push(`/coin/${coin.symbol}`)}
    className="cursor-pointer hover:bg-gray-100  transition-all duration-150">
         <td class="p-2 whitespace-nowrap">
            <div class="text-center">{coin.rank}</div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img 
                class="rounded-full" 
                src={coin.iconUrl} 
                width="40" height="40" alt="{coin.name}"/></div>
                <div class="font-medium text-gray-800">{coin.name}</div>
            </div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class="text-left">{`$ ${Number(coin.price).toFixed(2)}`}</div>
        </td>
        
        <td class="p-2 whitespace-nowrap">
            <div class="text-left">{`$ ${Number(coin.marketCap).toFixed(2)}`}</div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class={`text-lg text-left ${
            Number(coin.change) < 0 ? "text-red-500" : "text-green-500"
          }`}>
        {coin.change}</div>
        </td>
    </tr>
)
}

export default CoinListItem