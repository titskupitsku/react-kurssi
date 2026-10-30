import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


type Props = {
    count: number;
    onChange: (value: number) => void;
};

/**
 * Näyttää laskurin, jonka lähtöarvo on määritelty luku.
 * 
 * @param props.count
 * 
 * + ja - painikkeet kasvattavat ja laskevat arvoa.
 * 
 * @returns laskurin näkymä.
 */
function Counter({ count: alkuarvo, onChange }: Props) {
    const [count, setCount] = useState(alkuarvo);

    function decreaseCount() {
        const uusArvo = count - 1;
        setCount(uusArvo);
        onChange(uusArvo);
    }

    function increaseCount() {
        const uusArvo = count + 1;
        setCount(uusArvo);
        onChange(uusArvo);
    }

  return (
    <Container className="counter-box">
      <Row className="align-items-center">
        <Col className="text-start">
            <Button className="counter-button" variant="success" onClick={decreaseCount} type="button">-</Button>
        </Col>
        <Col className="text-center">
            <span>{count}</span>
        </Col>
        <Col className="text-end">
            <Button className="counter-button" variant="success" onClick={increaseCount} type="button">+</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
