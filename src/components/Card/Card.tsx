import Container from "../../Container";
import "./Card.scss";

const Card = () => {
  return (
    <Container>
      <div className="card">
        <img src="/vite.svg" alt="" />
        <div className="description">
          <h3>Card Title</h3>
          <p>Description about the card</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
