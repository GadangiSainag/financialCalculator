import { InputObj, SliderInputComponent } from "../../../utils/types";
import classes from "./NumberBox.module.css";

interface Props {
  input: SliderInputComponent["input"];
  liveObj: InputObj | undefined;
  onWheel: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}

export default function NumberBox(props: Props) {
  const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);
    if (isNaN(newValue)) {
      newValue = props.input.slider.min;
    }
    if (newValue < props.input.slider.min) {
      if (newValue < 0) {
        newValue = 0;
      }
      // setError(`Value cannot be less than ${props.input.slider.min}`);
      document
        .querySelector(`#parent_${event.target.id}`)
        ?.classList.add(classes.errorTextBox);
      // return;
    } else {
      // setError(null); // Clear error message if value is valid
      document
        .querySelector(`#parent_${event.target.id}`)
        ?.classList.remove(classes.errorTextBox);
    }
    if (newValue > props.input.slider.max) {
      newValue = props.input.slider.max;
    }

    props.onChange(props.input.id, newValue);
    //dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };
  return (
    <div className={classes.outerNumerical} id={`parent_${props.input.id}`}>
      <span className={classes.prefix}>{props.input.text_box.prefix}</span>
      <input
        id={props.input.id}
        type={"number"}
        value={props.liveObj?.value ?? props.input.text_box.placeholder_value}
        step={props.input.slider.step}
        onChange={handleNumChange}
        onWheel={props.onWheel}
        min={props.input.slider.min}
        readOnly={props.input.text_box.read_only}
      />
      <span className={classes.suffix}>{props.input.text_box.suffix}</span>
    </div>
  );
}
