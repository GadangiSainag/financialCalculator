import { InputObj, SliderInputComponent } from "../../../utils/types";
import NumberBox from "../Custom Elements/NumberBox";
import classes from "./Styles.module.css";

interface Props {
  input: SliderInputComponent["input"];
  liveObj: InputObj | undefined;
  onWheel: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}
export default function SliderNum(props: Props) {

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    props.onChange(props.input.id, newValue);
    //dispatch(updateInputValue({ id: props.input.id, value: newValue }));
  };

  return (
    
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <p className={classes.description}>{props.input.description}</p>
      <div className={classes.inputComp}>
        <div className={classes.sliderInput}>
          <input
            type="range"
            id={props.input.id}
            min={props.input.slider.min}
            max={props.input.slider.max}
            step={props.input.slider.step}
            width="250px"
            value={
              props.liveObj?.value ?? props.input.text_box.placeholder_value
            }
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
        <NumberBox input={props.input} liveObj={props.liveObj} onChange={props.onChange} onWheel={props.onWheel} />
      </div>
    </div>
  );
}
