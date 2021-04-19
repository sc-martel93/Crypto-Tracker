import React from 'react'

function Coin() {
    return (
        <div className="cryptoCoin">
            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="Bitcoin" className="coinLogo" />
            <div className="coinNameWrap">
                <h1 className="coinName">BitCoin</h1>
                <p className="coinSymbol">BTC</p>
            </div>
            <p className="coinPrice">$60,000</p>
            <p className="coinMarketCap">
                Market Cap: $1T
            </p>
            <p className="coinVolume">
                Volume (24H): 69,000,000
            </p>
        </div>
    )
}

export default Coin
