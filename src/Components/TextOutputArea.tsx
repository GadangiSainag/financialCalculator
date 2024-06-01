import { useEffect, useRef } from "react";
import { TextOutputComponent, calculatorType } from "../utils/types";
import AnimatedNumber from "./AnimateNumber";
import classes from "./textOutput.module.css";
interface Props {
  outputInfo: TextOutputComponent["output"][];
  outputValues: TextOutputComponent["output"][];
  pieInfo: calculatorType["pie"];
}
export default function TextAreaOutput(props: Props) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const parent = parentRef.current;

    if (parent) {
      const children = parent.children;
      const numChildren = children.length;

      // Remove any existing "extend" class
      Array.from(children).forEach((child) => {
        child.classList.remove(classes.extend);
        child.classList.remove(classes.singleOutput);
      });

      // Check if the number of children is odd
      if (numChildren % 2 !== 0) {
        const lastChild = children[numChildren - 1] as HTMLElement;
        lastChild.classList.add(classes.extend);
      }
      switch (numChildren) {
        case 1:
          children[0].classList.add(classes.singleOutput);
          break;
        case 4:
          break;
      }
    }
  }, [props.outputValues]);

  useEffect(() => {
    if (props.pieInfo.visible === false) {
      const parent = parentRef.current;
      if (parent) {
        // const children= parent.children
        // Array.from(children).forEach((child) =>
        //   child.classList.add(classes.exten)
        // );
        parent.classList.add(classes.gapOnTop);
      }
    }
  }, [props.pieInfo.visible]);

  return (
    <div>
      <div ref={parentRef} className={classes.parent}>
        {props.outputValues.map(
          (eachElement: TextOutputComponent["output"], index: number) => (
            // const cla =  `${styles[`div${index + 1}`]}` ;
            <div className={`${classes[`div${index + 1}`]}`}>
              <div className={`${classes[`div${index + 1}mini`]}`}>
                {/* <div
           style={{
             width: "15px",
             backgroundColor: "rgba(25, 26, 36, 1)",
             height: "15px",
           }}
         ></div> */}
                <span className={classes.title}>{eachElement.title}</span>
              </div>
              <AnimatedNumber
                value={eachElement?.value}
                symbol={eachElement?.front_character}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
