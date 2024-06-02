import { useState } from "react";
import { dropdownOptionObj, sliderInputComponent } from "../../utils/types";
import classes from "./customDropdown.module.css";

interface Props {
  data: sliderInputComponent["input"]["text_box"]["dropdown"];
  onOptionChange: (selectedOption: number) => void;
}

export default function CustomDropdown(props: Props) {
  const initialOptionObj = props.data.options.find(
    (item) => item.id === props.data.initial_option_id
  );

  const [currentOption, setCurrentOption] = useState<
    dropdownOptionObj | undefined
  >(initialOptionObj);
  const handleClick = () => {
    if (!currentOption) return;

    const currentIndex = props.data.options.findIndex(
      (item) => item.id === currentOption.id
    );
    const nextIndex = (currentIndex + 1) % props.data.options.length;
    const nextOptionObj = props.data.options[nextIndex];

    setCurrentOption(nextOptionObj);
    props.onOptionChange(nextOptionObj.value);
  };

  return (
    <div
      onClick={handleClick}
      className={`${classes.preventSelect} ${classes.dropDownStyle}`}
    >
      {currentOption?.option_label}
    </div>
  );
}
