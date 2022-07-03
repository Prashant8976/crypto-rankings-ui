import React from 'react'

const CoinListItem = ({coin}) => {
  return (
    <tr>
         <td class="p-2 whitespace-nowrap">
            <div class="text-center">{coin.rank}</div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class="flex items-center">
                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <img 
                class="rounded-full" 
                src="{coin.iconUrl}" 
                width="40" height="40" alt="{coin.name}"/></div>
                <div class="font-medium text-gray-800">{`$ ${Number(coin.price).toFixed(2)}`}</div>
            </div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class="text-left">{`$ ${Number(coin.marketCap).toFixed(2)}`}</div>
        </td>
        <td class="p-2 whitespace-nowrap">
            <div class={`text-left font-medium 
            ${Number(coin.change)>0? "text-green-500":"text-red-500"}`}></div>
        </td>
    </tr>
)
}

export default CoinListItem