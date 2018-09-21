import glamorous from 'glamorous';
// import { css } from "glamor";

const mapStyle = [
  { elementType: "geometry", stylers: [{color: "#242f3e"}] },
  { elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}] },
  { elementType: "labels.text.fill", stylers: [{color: "#746855"}] },
  { featureType: "administrative", elementType: "geometry.fill", stylers: [{visibility: "off"}] },
  { featureType: "administrative.land_parcel", stylers: [{visibility: "off"}] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{color: "#d59563"}] },
  { featureType: "administrative.neighborhood", stylers: [{visibility: "off"}] },
  { featureType: "landscape", elementType: "geometry.fill", stylers: [{color: "#73c2fb"}] },
  { featureType: "poi", elementType: "geometry.fill", stylers: [{color: "#181818"}, {visibility: "simplified"}] }, // ALTERED
  { featureType: "poi", elementType: "labels.text", stylers: [{visibility: "off"}] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{color: "#d59563"}] },
  { featureType: "poi.business", stylers: [{visibility: "off"}] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{color: "#263c3f"}] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{color: "#6b9a76"}] },
  { featureType: "road", stylers: [{color: "#000000"}] },
  { featureType: "road", elementType: "geometry", stylers: [{color: "#38414e"}] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{color: "#000000"}] }, // ALTERED ?
  { featureType: "road", elementType: "geometry.stroke", stylers: [{color: "#212a37"}] },
  { featureType: "road", elementType: "labels", stylers: [{visibility: "off"}] },
  { featureType: "road", elementType: "labels.icon", stylers: [{visibility: "off"}] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{color: "#9ca5b3"}] },
  { featureType: "road.arterial", stylers: [{visibility: "off"}] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{color: "#746855"}] },
  { featureType: "road.highway", elementType: "geometry.fill", stylers: [{color: "#474747"}] }, // ALTERED
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{color: "#1f2835"}] },
  { featureType: "road.highway", elementType: "labels", stylers: [{visibility: "off"}] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{color: "#f3d19c"}] },
  { featureType: "road.local", stylers: [{visibility: "off"}] },
  { featureType: "transit", stylers: [{visibility: "off"}] },
  { featureType: "transit", elementType: "geometry", stylers: [{color: "#2f3948"}] },
  { featureType: "transit", elementType: "geometry.fill", stylers: [{visibility: "off"}] },
  { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{color: "#d59563"}] },
  { featureType: "water", elementType: "geometry", stylers: [{color: "#17263c"}] },
  { featureType: "water", elementType: "geometry.fill", stylers: [{color: "#2d2d2d"}, {visibility: "on"}] }, // ALTERED
  { featureType: "water", elementType: "labels.text", stylers: [{visibility: "off"}] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{color: "#515c6d"}] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{color: "#17263c" }] }
];

const Container = glamorous.div({
  // backgroundColor: "#3D3D3D",
  background: "linear-gradient(#2d2d2d, #3d3d3d)",
  display: "flex",
});

const ContactContent = glamorous.div({
  height: "100%",
  width: "50%",
  margin: "0 1.5%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between"
  // backgroundImage: "radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26)"
});

const Header = glamorous.h1({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3vw"
});

const Social = glamorous.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-end"
});

const Form = glamorous.div({
  display: "flex",
  flexDirection: "column",
});

// const gradient = css.keyframes({
//   "0%": { backgroundPosition: "0 0" },
//   "100%": { backgroundPosition: "100% 0" }
// });

export {
  mapStyle,
  Container,
  ContactContent,
  Header,
  Social,
  Form
}