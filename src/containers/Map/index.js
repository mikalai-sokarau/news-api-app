import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { LoadingElement, ContainerElement } from './style';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB0kC8f2dmqytd6B9_6dg_Ozr1QZUCuDfc';
const link = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const Map = compose(
  withProps({
    googleMapURL: link,
    loadingElement: <LoadingElement />,
    containerElement: <ContainerElement />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 53.9045, lng: 27.5615 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

export default Map;
