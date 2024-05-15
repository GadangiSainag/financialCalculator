import classes from "./textOutput.module.css";
export interface TextOutputComponent {
  output: {
    id: string;
    title: string;
    front_character: string;
    back_character: string;
    formula: {
        formulaName: string;
        parameters: string[];
    };
  }[];
}
export default function TextAreaOutput(props: TextOutputComponent) {
  return (
    <div>
      {/* <h1>{props.output[1].}</h1>  */}
      <h1 style={{ fontSize: "2 .5em" }}>₹2,14,522 /month</h1>
      <div className={classes.parent}>
        <div className={classes.div1}>
          <div className={classes.div1mini}>
            <div
              style={{
                width: "15px",
                backgroundColor: "rgba(25, 26, 36, 1)",
                height: "15px",
              }}
            ></div>

            <h3>{props.output[0].title}</h3>
          </div>
          ₹ 2165468
        </div>
        <div className={classes.div2}>
          <div className={classes.div2mini}>
            <div
              style={{
                width: "15px",
                backgroundColor: "rgba(77, 100, 141, 1)",
                height: "15px",
              }}
            ></div>

            <h3>{props.output[1].title}</h3>
          </div>
          ₹ 6841984
        </div>

        <div className={classes.div3}>
          <h3>{props.output[2].title}</h3>
          ₹5578316851
        </div>
      </div>
    </div>
  );
}
