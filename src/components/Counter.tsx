import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/**
 * Näyttää laskurin, jonka lähtöarvo on nolla.
 * + ja - painikkeet kasvattavat ja laskevat arvoa.
 */
function Counter() {
    const [count, setCount] = useState(0);

    function decreaseCount() {
        setCount(count - 1);
    }

    function increaseCount() {
        setCount(count + 1);
    }

  return (
    <Container>
      <Row>
        <Col>
            <Button className="counter-button" variant="success" onClick={decreaseCount} type="button">-</Button>
            <span>{count}</span>
            <Button className="counter-button" variant="success" onClick={increaseCount} type="button">+</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
