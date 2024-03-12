import { RegisterBpIcon } from "@/ui/icons/new-bp-icon";
import Button from "@/ui/btn/button";
import "./onboarding.css";

const NewBpOnboarding = ({ functionProp }) => {
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
      <Button type={"button"} onClick={functionProp} variant={"primary"}>
        agregar
      </Button>
    </div>
  );
};

export default NewBpOnboarding;
