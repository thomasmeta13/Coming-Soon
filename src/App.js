import React from 'react';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="https://filehub.network">FileHub</a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Bring Life to your DAO.</h1>
            <p>Demo coming soon. Check back to claim your Hub. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:meta@solarity.xyz">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>Join <a className="underlined" href="https://filehub.network" target="_blank" rel="noopener noreferrer">Filehub</a></span>
        </div>
      </div>
    );
  }
}

export default App;