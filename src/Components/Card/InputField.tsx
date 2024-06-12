import React from "react";
import { RootState } from "../../state/store";
import { sliderInputComponent } from "../../utils/types";
import makeSelectInputById from "../../utils/selectInputByID";
import { useSelector } from "react-redux";
import CreateInputComponent from "../Inputs/TemplateMapper";
interface Props {
  input: sliderInputComponent["input"];
  onChange: (id: string, value: number) => void;
}

export default function InputField(props: Props) {
  // const [, setError] = useState<string | null>(null);

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.blur();
    e.stopPropagation();
    setTimeout(() => {
      target.focus();
    }, 0);
  };

  const selectInput = makeSelectInputById();
  const liveObj = useSelector((state: RootState) =>
    selectInput(state, props.input.id)
  );
//  Passing this object into the component
  const inputData = {
    input: props.input,
    liveObj: liveObj,
    onWheel: handleWheel,
    onChange: props.onChange,
  };

  return (
    <CreateInputComponent
      type={props.input.template_type}
      inputData={inputData}
    />
  );
}
