import { inputObj, sliderInputComponent } from "../../../utils/types";
import NumberBox from "../Custom Elements/NumberBox";
import classes from "./Styles.module.css";

interface Props {
  input: sliderInputComponent["input"];
  liveObj: inputObj | undefined;
  onWheel: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}

export default function Num(props: Props) {
  return (
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <div className={classes.inputComp}>
        <p className={classes.smallDescription}>{props.input.description}</p>
        <div>
          <NumberBox
            input={props.input}
            liveObj={props.liveObj}
            onChange={props.onChange}
            onWheel={props.onWheel}
          />
        </div>
      </div>
    </div>
  );
}
