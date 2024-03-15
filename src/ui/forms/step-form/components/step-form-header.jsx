import "../styles/step-form-header.css";

// icons components
import MarkerIcon from "@/ui/icons/marker-icon";
import ImgIcon from "@/ui/icons/img-icon";
import DocumentIcon from "@/ui/icons/document-icon";
import CourtIcon from "@/ui/icons/court-icon";
import DayIcon from "@/ui/icons/day-icon";
import ListIcon from "@/ui/icons/list-icon";

import { useStepFormStore } from "@/store/court-store";

const StepFormHeader = () => {
  const currentStep = useStepFormStore((state) => state.currentStep);

  const steps = [
    { title: "ubicacion", icon: MarkerIcon },
    { title: "imagenes", icon: ImgIcon },
    { title: "descripcion", icon: DocumentIcon },
    { title: "cancha", icon: CourtIcon },
    { title: "dias y horarios", icon: DayIcon },
    { title: "servicios", icon: ListIcon },
  ];
  return (
    <header className="step-form__header">
      <ul className="step-form__progress">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step-form__icon-container ${
              index <= currentStep ? "step-form__icon-container--active" : ""
            }`}
          >
            <step.icon />
          </li>
        ))}
      </ul>
      <h1 className="title title--xlg">{steps[currentStep].title}</h1>
    </header>
  );
};

export default StepFormHeader;
