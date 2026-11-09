import { Container, Row, Col } from "react-bootstrap";
import Counter from "./components/Counter.tsx";
import RecipeCard from "./components/RecipeCard.tsx";
import "./Counter.css";
import "./RecipeCard.css";

function App() {
  function handleCounterChange(value: number) {
    console.log(value);
  }

  return (
    <div>
      <p>moi moi moi</p>
      <Counter count={7} onChange={handleCounterChange} />
      <Counter count={2} onChange={handleCounterChange} />
      <Counter count={5} onChange={handleCounterChange} />
      <Counter count={-3} onChange={handleCounterChange} />
      <Container>
        <Row className="g-4 mb-4">
          <Col xs={12} md={6}>
            <RecipeCard
              title="My Awesome Kebab"
              description="Very tasty kebab with lamb meat and hot spices, which we can cook on the grill in the winter when outside is freezing cracking show and inside the fire cracks in the stove."
              pictureUrl="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg"
            />
          </Col>
          <Col xs={12} md={6}>
            <RecipeCard
              title="Delicious Pizza"
              description="Yummy yummy pizza super delish and cheesy and gooey and omnomnomnom so so YUMMY wow a true winner next up: the entire bee movie script"
              pictureUrl="https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg"
            />
          </Col>
        </Row>
        <Row className="g-4 mb-4">
          <Col xs={12} md={6}>
            <RecipeCard
              title="Yummy Yum Pasta"
              description="Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. -We are! - Bee-men. - Amen! Hallelujah!"
              pictureUrl="https://images.pexels.com/photos/34890641/pexels-photo-34890641.jpeg"
            />
          </Col>
          <Col xs={12} md={6}>
            <RecipeCard
              title="Chicken Wing-desu"
              description="Here we go. Keep your hands and antennas inside the tram at all times. - Wonder what it'll be like? - A little scary. Welcome to Honex, a division of Honesco and a part of the Hexagon Group. "
              pictureUrl="https://images.pexels.com/photos/36863569/pexels-photo-36863569.jpeg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
