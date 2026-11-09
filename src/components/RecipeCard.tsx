import { Card, Button } from "react-bootstrap";

type Props = {
  title: string;
  description: string;
  pictureUrl: string;
};

function RecipeCard({ title, description, pictureUrl }: Props) {
  const reseptiOtsikko = title.length > 17 ? title.slice(0, 17) + "..." : title;

  const reseptiKuvaus = description.length > 47 ? description.slice(0, 47) + "..." : description;

  return (
    <Card className="card">
      <Card.Img variant="top" src={pictureUrl} alt={title} />
      <Card.Body className="text-start">
        <Card.Title className="card-title" as="h6">
          {reseptiOtsikko}
        </Card.Title>
        <Card.Text className="card-text">{reseptiKuvaus}</Card.Text>
        <Button variant="success">Show details</Button>
      </Card.Body>
    </Card>
  );
}
/* one column 4 rows? */
export default RecipeCard;
