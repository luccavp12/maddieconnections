import './css/App.css';

import { Link } from 'react-router-dom';

export function getCurrentDate(separator=''){

  let newDate = new Date()

  let date = newDate.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let month = monthNames[newDate.getMonth()];


  let year = newDate.getFullYear();
  
  return `${month} ${date}, ${year}`
}

function App() {
  return (
    <div className="App">
      <div className='centerContainer'>
        <div className='centerItem'>
          <div className='connectionsLogoContainer'>
            <div className='connectionsLogo'>
            </div>
          </div>
          <div className="connectionsTitle">Connections</div>
          <div className="connectionsCallToAction"> Group words that share a common thread.</div>
          <Link to="/game1" style={{"textDecoration": "none"}}>
            <div className="playButton">
              Play
            </div>
          </Link>
          <div className="connectionsCallToAction"> Want to access all of our games?</div>
          <Link to="/game1" style={{"textDecoration": "none"}}>
            <div className="blankPlayButton">
              Log in
            </div>
          </Link>
          <Link to="/game1" style={{"textDecoration": "none"}}>
            <div className="blankPlayButton">
              Subscribe
            </div>
          </Link>
          <div className="dateText"> {getCurrentDate()} </div>
          <div className='connectionsCallToAction'>By Lucca Psaila</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
