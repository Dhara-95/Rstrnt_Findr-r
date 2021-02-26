import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const RestaurantLocationMap = (props) => {
  const { latitude, longitude } = props.coordinates;
  const { name } = props;

  return (
    <MapContainer
      className="mx-auto"
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export { RestaurantLocationMap };
