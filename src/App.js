import react, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';

function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1 className="brand"><i class="fas fa-coins"></i>Crypto Tracker</h1>
        <form>
          <input className="inputField" type="text" placeholder="Search a Coin"></input>
        </form>
      </div>
      <div className="coinsContainer">
        <Coin />
      </div>

    </div>
  );
}

export default App;
