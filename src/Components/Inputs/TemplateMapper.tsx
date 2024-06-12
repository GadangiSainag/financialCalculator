import SliderNum from "./SliderNum/Template";
import { inputObj, sliderInputComponent } from "../../utils/types";
import Option from "./Option/Template";
import Num from "./Num/Template";

interface InputComponentProps {
  type: string;
  inputData: {
    input: sliderInputComponent["input"];
    liveObj: inputObj | undefined;
    onWheel: (e: React.WheelEvent<HTMLInputElement>) => void;
    onChange: (id: string, value: number) => void;
  };
}

function CreateInputComponent(props: InputComponentProps) {
  console.log("type");
  console.log(props.type);
  if (props.type === "SLIDER_NUM") {
    return <SliderNum {...props["inputData"]} />;
  } else if (props.type === "OPTION") {
    return <Option {...props["inputData"]} />;
  } else if (props.type === "NUM") {
    return <Num {...props["inputData"]} />;
  }
  return null;
}

export default CreateInputComponent;
