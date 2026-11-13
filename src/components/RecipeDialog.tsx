import { Modal, Button } from "react-bootstrap";
import RecipeItemList from "./RecipeItem.tsx";

type RecipeItem = {
  name: string;
  amount: number;
};

type Props = {
  title: string;
  description: string;
  pictureUrl: string;
  items: RecipeItem[];
  show: boolean;
  setShow: (show: boolean) => void;
};

export default function RecipeDialog ({ title, description, pictureUrl, items, show, setShow }: Props ) {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={pictureUrl} alt={title} className="img-fluid" />
                <p>{description}</p>
                <RecipeItemList items={items} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type="button" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}