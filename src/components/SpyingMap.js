import React from "react";
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import styled from "styled-components";

const DivMap = styled.div`
  width: auto;
  height: 280px !important;
  margin: 8px 16px !important;
`;

const StyledP = styled.p`
  color: black;
  text-align: center;
  margin: 8px auto;
`;
const StyledSpan = styled.span`
  color: var(--secondary);
  font-weight: bolder;
`;

const SpyingMap = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  // UseEffect + fetching the user's data
  React.useEffect(() => {
    fetch("https://ipwhois.app/json/?objects=ip,country,city,latitude,longitude")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      });
  }, []);

  console.log(23, "userInfo:", userInfo);
  if (userInfo === null) {
    return <p>Loading...</p>;
  }

  const defaultPosition = [userInfo.latitude, userInfo.longitude];
  // console.log(29, "defaultPosition:", defaultPosition);

  return (
    <DivMap>
      <StyledP>
        You are in: <StyledSpan>{userInfo.city}</StyledSpan> / <StyledSpan>{userInfo.country}</StyledSpan>. Your IP address
        is: <StyledSpan>{userInfo.ip}</StyledSpan>.
      </StyledP>
      <MapContainer
        style={{width: "auto", height: "87.5%"}}
        center={defaultPosition}
        zoom={12}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultPosition}>
          <Popup>You are here...</Popup>
          <Tooltip>You are here...</Tooltip>
        </Marker>
      </MapContainer>
    </DivMap>
  );
};

export default SpyingMap;
