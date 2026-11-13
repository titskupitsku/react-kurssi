import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import RecipeDialog from "./RecipeDialog.tsx";

type RecipeItem = {
  name: string;
  amount: number;
};

type Props = {
  title: string;
  description: string;
  pictureUrl: string;
  items: RecipeItem[];
};

function RecipeCard({ title, description, pictureUrl, items }: Props) {

  const [show, setShow] = useState(false);

  const reseptiOtsikko = title.length > 17 ? title.slice(0, 17) + "..." : title;

  const reseptiKuvaus = description.length > 47 ? description.slice(0, 47) + "..." : description;

  return (
    <>
    <Card className="card">
      <Card.Img variant="top" src={pictureUrl} alt={title} />
      <Card.Body className="text-start">
        <Card.Title className="card-title" as="h6">
          {reseptiOtsikko}
        </Card.Title>
        <Card.Text className="card-text">{reseptiKuvaus}</Card.Text>
        <Button variant="success" onClick={() => setShow(true)}>Show details</Button>
      </Card.Body>
    </Card>
    <RecipeDialog title={title} description={description} pictureUrl={pictureUrl} items={items} show={show} setShow={setShow} 
    />
  </>
  );
}
/* one column 4 rows? */
export default RecipeCard;
