import { ListGroup } from "react-bootstrap";

type RecipeItem = {
  name: string;
  amount: number;
};

type Props = {
  items: RecipeItem[];
};

export default function RecipeItemList({ items }: Props) {
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item.name} className="d-flex justify-content-between">
          <span>{item.name}</span>
          <span>{item.amount}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
