import glamorous from 'glamorous';
import { css } from "glamor";

// const Container = glamorous.div({
//   backgroundColor: "#3D3D3D",
//   height: `${window.innerHeight}`,
//   width: `${window.innerWidth - window.scrollWidth}`
// });

const type = css.keyframes({
  from: { width: "0%" }
});

const Container = {
  backgroundColor: "black",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth}`,
  // overflowY: "hidden"
};

const Title = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "5vw",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  WebkitTransform: "translate(-50%, -50%)",
  zIndex: 100000,
  textShadow: "0 0 1px #E0E0E0, 0 0 5px #92BCDB",
  whiteSpace: "nowrap",
  overflow: "hidden",
  animation: `${type} 5s steps(60, end)` 
});

const SubTitle = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "1.5vw",
  width: "100%",
  position: "absolute",
  top: "63%",
  left: "50%",
  transform: "translate(-50%, -63%)",
  WebkitTransform: "translate(-50%, -63%)",
  zIndex: 100000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // flexDirection: "column", // use at tablet and/or phone breakpoints
});

export {
  Container,
  Title,
  SubTitle
}