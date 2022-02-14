import "./SingleCard.css";

function SingleCard({ card }) {

  function handleClick() {}
  
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleClick} alt="card back" />
      </div>
    </div>
  );
}

export default SingleCard;
