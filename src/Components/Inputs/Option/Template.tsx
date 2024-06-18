import { DropdownOptionObj, InputObj, SliderInputComponent } from "../../../utils/types";
import CustomDropdown from "../../Card/CustomDropdown";
import classes from "./Styles.module.css";

interface Props {
  input: SliderInputComponent["input"];
  liveObj: InputObj | undefined;
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
  onChange: (id: string, value: number) => void;
}
export default function Option(props: Props) {

  const handleDropdownChange = (option: DropdownOptionObj) => {
    props.onChange(props.input.id, option.value);
  };
  return (
    <div className={classes.inputUnit}>
      <h2 className={classes.title}>{props.input.title}</h2>
      <div className={classes.inputComp}> 
      <p className={classes.smallDescription}>{props.input.description}</p>
      <div className={classes.outerNumerical} id={`parent_${props.input.id}`}>
        <CustomDropdown
          data={props.input.text_box.dropdown}
          onOptionChange={handleDropdownChange}
        />
        <span className={classes.suffix}>
          <div style={{width: "20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ui-svg-inline ml-2-5"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg>
          </div>
        </span>
      </div>
      </div>
    </div>
  );
}
