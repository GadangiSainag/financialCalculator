import { InputObj, SliderInputComponent } from "../../../../utils/types";
import classes from "./Slider.module.css";
interface Props {
  input: SliderInputComponent["input"];
  liveObj: InputObj | undefined;
  onChange: (id: string, value: number) => void;
}
export default function Slider(props: Props) {
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    props.onChange(props.input.id, newValue);
    //dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };
  return (
    <div className={classes.sliderInput}>
      <input
        type="range"
        id={props.input.id}
        min={props.input.slider.min}
        max={props.input.slider.max}
        step={props.input.slider.step}
        width="250px"
        value={props.liveObj?.value ?? props.input.text_box.placeholder_value}
        onChange={handleRangeChange}
      />
      <div className={classes.constants}>
        <span id={classes.minValue} className={classes.preventSelect}>
          {props.input.slider.minLabel}
        </span>
        <span id={classes.maxValue} className={classes.preventSelect}>
          {props.input.slider.maxLabel}
        </span>
      </div>
    </div>
  );
}
