import React from 'react'
import { Link } from 'react-router-dom'

export default function Listitem({coin}) {
  return (
      <div className='home-crypto'>
    <Link to={`/${coin.id}`}>
    <span className='home-crypto-image'>
        <img src={coin.image} alt='no data av'/>
    </span>
    <span className='home-crypto-name'>{coin.name}</span>
    
   {coin.priceBtc && ( <span className='home-crypto-prices'>
   <span className='home-crypto-btc'>
   {coin.priceBtc}BTC</span>
   <span className='home-crypto-usd'>({coin.priceUsd}USD)</span>
    </span>)}
    </Link>
    </div>
  )
}
