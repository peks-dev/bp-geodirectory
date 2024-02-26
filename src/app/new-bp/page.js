import { RegisterBpIcon } from "@/ui/icons/new-bp-icon";
import "./page.css";

export default function NewBp() {
  return (
    <section>
      <div className="icon__container">
        <RegisterBpIcon />
      </div>
      <h1>basket place nuevo</h1>
      <p>
        Comparte tu cancha, crea encuentros memorables y forma parte de la
        comunidad que impulsa el juego en cada rincón.
      </p>
      <button type="button" className="btn btn--primary">
        agregar
      </button>
    </section>
  );
}
