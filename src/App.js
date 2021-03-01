import './App.css';
import realMadrid from './data/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [players,setPlayers] = useState([])
  const [cartPlayer, setCartPlayer] = useState([])
  useEffect(()=>{
    setPlayers(realMadrid)
    console.log(realMadrid);
  },[])
  const handleAddPlayer=(player)=>{
    const newCartPlayer = [...cartPlayer,player]
    setCartPlayer(newCartPlayer);
  }
  return (
    <div className="App">
      <h3>Real Madrid Club Footbal Player</h3>
      <h4>Player Added :{cartPlayer.length}</h4>
      <Cart cartPlayer= {cartPlayer}></Cart>
    
      {
        players.map(player=><Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
      }
      
    </div>
  );
}

export default App;
