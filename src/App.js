import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="header">
        <h1 className="brand"><i className="fas fa-coins"></i> Crypto Tracker</h1>
        <form>
          <input className="inputField" type="text" onChange={handleChange} placeholder="Search a Coin"></input>
        </form>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
