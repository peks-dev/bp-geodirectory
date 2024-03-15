import "../styles/step-form-content.css";

//steps components
import StepLocation from "./steps/step-location";
import StepDescription from "./steps/step-description";
import StepCourt from "./steps/Step-court";
import StepSchedule from "./steps/step-schedule";
import StepImgs from "./steps/step-imgs";
import StepServices from "./steps/step-description";

import StepFormButtons from "./step-form-buttons";

import { useStepFormStore } from "@/store/court-store";

const StepFormContent = () => {
  const stepToRender = useStepFormStore((state) => state.currentStep);

  const Steps = () => {
    switch (stepToRender) {
      case 0:
        return <StepLocation />;
      case 1:
        return <StepImgs />;
      case 2:
        return <StepDescription />;
      case 3:
        return <StepCourt />;
      case 4:
        return <StepSchedule />;
      case 5:
        return <StepServices />;
      default:
        return null;
    }
  };

  function registerCourt() {
    alert("datos enviados");
  }

  return (
    <form className="step-form__content">
      <div className="step-form__fields-wrapper">
        <Steps />
      </div>
      <StepFormButtons />
    </form>
  );
};

export default StepFormContent;
