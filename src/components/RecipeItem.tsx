import { Container, Row, Col } from "react-bootstrap";

type Props = {
  name: string;
  amount: number;
};

function RecipeItem({ name, amount }: Props) {
  return (
    <Container className="RecipeItem">
      <Row>
        <Col>
          <span>{name}</span>
        </Col>
        <Col>
          <span>{amount}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeItem;
