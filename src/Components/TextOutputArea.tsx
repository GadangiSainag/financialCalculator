import { TextOutputComponent } from "../utils/types";
import AnimatedNumber from "./AnimateNumber";
import classes from "./textOutput.module.css";
interface Props {
  outputInfo: TextOutputComponent["output"][];
  outputValues: TextOutputComponent["output"][];
}
export default function TextAreaOutput(props: Props) {
  return (
    <div>
      {/* <h1>{props.output[1].}</h1>  */}
      <h1 style={{ fontSize: "2 .5em" }}>₹2,14,522 /month</h1>
      <div className={classes.parent}>
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
                <h3>{eachElement.title}</h3>
              </div>
              {/* ₹ 2165468 */}
              {/* {`₹ ${eachElement?.value}`} */}
              <AnimatedNumber
                value={eachElement?.value}
                symbol={eachElement?.front_character}
              />
            </div>
          )
        )}

        {/* <div className={`classes.div1`}>
          <div className={`classes.div1mini`}>
            <div
              style={{
                width: "15px",
                backgroundColor: "rgba(25, 26, 36, 1)",
                height: "15px",
              }}
            ></div>
            <h3>{props.outputInfo[0].title}</h3>
          </div>
          ₹ 2165468
        </div>


        <div className={`classes.div2`}>
          <div className={`classes.div2mini`}>
            <div
              style={{
                width: "15px",
                backgroundColor: "rgba(77, 100, 141, 1)",
                height: "15px",
              }}
            ></div>
            <h3>{props.outputInfo[1].title}</h3>
          </div>
          ₹ 6841984
        </div>


        <div className={`classes.div3`}>
          <h3>{props.outputInfo[0].title}</h3>
          ₹5578316851
          {props.outputValues[0]?.value}
        </div> */}
      </div>
    </div>
  );
}
