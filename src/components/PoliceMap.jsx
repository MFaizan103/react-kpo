import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafletMap = () => {
  const [policeStations, setPoliceStations] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const fetchPoliceStations = () => {
    // Implement fetching police stations data from an open-source data provider like OpenStreetMap
    // Example: https://wiki.openstreetmap.org/wiki/API_v0.6#Map
    // After fetching police stations data, update the policeStations state
  };

  const handleSearch = () => {
    fetchPoliceStations();
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className='w'>
      <div>
        <input
          type="text"
          placeholder="Search location"
          value={searchLocation}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleCurrentLocation}>Use Current Location</button>
      </div>
      <div >
        <MapContainer center={currentLocation || [51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Render markers for police stations */}
          {policeStations.map((station, index) => (
            <Marker key={index} position={[station.lat, station.lng]}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* Render list of police stations */}
      <ul>
        {policeStations.map((station, index) => (
          <li key={index}>{station.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeafletMap;
