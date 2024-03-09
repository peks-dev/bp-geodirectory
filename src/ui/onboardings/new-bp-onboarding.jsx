import { RegisterBpIcon } from "@/ui/icons/new-bp-icon";
import "./onboarding.css";

const NewBpOnboarding = ({ setState }) => {
  const handleState = () => {
    setState(true);
  };

  return (
    <div className="onboarding">
      <div className="onboarding__icon-container">
        <RegisterBpIcon />
      </div>
      <h1 className="title title--xlg">basket place nuevo</h1>
      <p>
        Comparte tu cancha, crea encuentros memorables y forma parte de la
        comunidad que impulsa el juego en cada rincón.
      </p>
      <button type="button" className="btn btn--primary" onClick={handleState}>
        agregar
      </button>
    </div>
  );
};

export default NewBpOnboarding;
