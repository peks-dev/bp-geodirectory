import Button from "@/ui/btn/button";
import Link from "next/link";
import "./court-card.css";

const CourtCard = ({ name, location, rating, level, id }) => {
  return (
    <article className="court-card">
      <header className="court-card__header">
        <picture className="court-card__img-container">
          <img src="/test/photo-court.jpg" alt="court cover" />
        </picture>
        <div className="court-card__info-wrapper">
          <div className="court-card__text-wrapper">
            <h2 className="court-card__name">{name}</h2>
            <div className="court-card__location">
              <p>merida, yucatan</p>
            </div>
          </div>
          <div className="court-card__rating">4</div>
        </div>
      </header>
      <footer className="court-card__footer">
        <p className="court-card__level">
          nivel de juego: <span>{level}</span>
        </p>
        <Button variant={"secundary"}>
          <Link href={`/courts/${id}`}>explorar</Link>
        </Button>
      </footer>
    </article>
  );
};

export default CourtCard;
