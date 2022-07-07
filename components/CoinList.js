import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoinListItem from './CoinListItem'

const CoinList = () => {
    const [coins,setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData=async()=>{
        setLoading(true); 
        const response=await axios.get("http://localhost:8081/api/v1/coins")
        setCoins(response.data);
        setLoading(false);
      }
      fetchData();
    }, [])
    
  return (
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col mt-6 h-full">
        <div class="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Customers</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Rank</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Coin</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Price</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Market cap</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Change</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            {coins.map(coin=>(
                                <CoinListItem coin={coin} key={coin.uuid}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CoinList