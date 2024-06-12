import { inputObj, sliderInputComponent } from "../../../utils/types";
import CustomDropdown from "../../Card/CustomDropdown";
import classes from "./Styles.module.css";

interface Props {
  input: sliderInputComponent["input"];
  liveObj: inputObj | undefined;
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}
export default function Option(props: Props) {
  const handleDropdownChange = (optionValue: number) => {
    props.onChange(props.input.id, optionValue);
  };
  return (
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <p className={classes.description}>{props.input.description}</p>
      <div className={classes.outerNumerical} id={`parent_${props.input.id}`}>
        <CustomDropdown
          data={props.input.text_box.dropdown}
          onOptionChange={handleDropdownChange}
        />
        <span className={classes.suffix}> {">"} </span>
      </div>
    </div>
  );
}
