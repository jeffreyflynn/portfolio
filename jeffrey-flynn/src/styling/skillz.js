import glamorous from 'glamorous';

const Container = glamorous.div({
  background: "linear-gradient(black, #73C2FB)",
  height: `${window.innerHeight}`,
  width: `${window.innerWidth - window.scrollWidth}`,
});

const Planet = {
  height: "100%",
  width: "50%",
};

export {
  Container,
  Planet
}