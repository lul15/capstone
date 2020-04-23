/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as schoolData from "./mapData/school-data.json";
//import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { faSchool} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loginscreen from './Loginscreen'

class App extends Component {
  constructor(props) {
    super(props); 
    this.state={
      loginPage: [],
      uploadScreen: []
    }
  }

  componentWillMount() {
    var loginPage = []; 
    loginPage.push(<Loginscreen parentContext={this} />); 
    this.setState({
      loginPage:loginPage
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    ); 
  }
}

const style = {
  margin: 20,
};

export default App; 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/*
export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 42.40,
    longitude: -71.20,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedSchool(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPTOKEN}
        mapStyle = 'mapbox://styles/mapbox/dark-v9'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        markers here
        {schoolData.features.map(school => (
          <Marker
            key={school.properties.School_ID}
            latitude={school.geometry.coordinates[1]}
            longitude={school.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedSchool(school);
              }}
            >
              <div>
                <FontAwesomeIcon icon={faSchool} />
              </div>
            </button>
          </Marker>
        ))}

        {selectedSchool ? (
          <Popup
            latitude={selectedSchool.geometry.coordinates[1]}
            longitude={selectedSchool.geometry.coordinates[0]}
            onClose={() => {
              setSelectedSchool(null);
            }}
          >
            <div>
              <h2>{selectedSchool.properties.NAME}</h2>
              <p>{selectedSchool.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
*/

