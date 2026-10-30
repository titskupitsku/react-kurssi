import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
