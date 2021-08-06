import React from "react";
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import styled from "styled-components";

const DivMap = styled.div`
  width: auto;
  height: 250px !important;
  margin: 16px !important;
`;

const SpyingMap = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  // UseEffect + getting the user's data
  React.useEffect(() => {
    fetch("https://ipwhois.app/json/?objects=ip,country,city,latitude,longitude")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      });
  }, []);
  console.log(userInfo);
  if (userInfo === null) {
    return <p>Loading...</p>;
  }
  // const defaultPosition = [54.35, 18.64];
  const defaultPosition = [userInfo.latitude, userInfo.longitude];
  console.log(defaultPosition);
  return (
    <DivMap>
      <MapContainer
        style={{width: "auto", height: "100%"}}
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultPosition}>
          <Popup open={true}>You are here...</Popup>
          <Tooltip>You are here...</Tooltip>
        </Marker>
      </MapContainer>
    </DivMap>
  );
};

export default SpyingMap;
