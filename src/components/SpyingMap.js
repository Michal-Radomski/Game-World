import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import {LatLngExpression} from "leaflet";
import styled from "styled-components";

const DivMap = styled.div`
  width: auto;
  height: 250px !important;
  margin: 16px !important;
`;

const SpyingMap = () => {
  const defaultPosition = [48.864716, 2.349];
  return (
    <DivMap>
      <MapContainer style={{width: "auto", height: "100%"}} center={defaultPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </DivMap>
  );
};

export default SpyingMap;
