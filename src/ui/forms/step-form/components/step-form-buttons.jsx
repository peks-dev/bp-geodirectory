import "../styles/step-form-buttons.css";

import { useStepFormStore } from "@/store/court-store";

// Components
import Button from "@/ui/btn/button";

const StepFormButtons = () => {
  const { nextStep, prevStep, currentStep } = useStepFormStore();

  const handleSendFormData = (e) => {
    e.preventDefault();
    alert("datos enviados");
  };

  // render element
  return (
    <div className="step-form__buttons">
      <Button onClick={prevStep} variant={"secundary"} type={"button"}>
        {currentStep === 0 ? "" : "atras"}
      </Button>

      <Button
        onClick={currentStep === 5 ? handleSendFormData : nextStep}
        variant={currentStep === 5 ? "primary" : "secundary"}
        type={"button"}
      >
        {currentStep === 5 ? "enviar" : "siguiente"}
      </Button>
    </div>
  );
};

export default StepFormButtons;
