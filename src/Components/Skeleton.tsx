import classes from "./Skeleton.module.css";
export default function SkletonLoading() {
  return (
    <div className={classes.card}>
      <header>. . . . . .</header>
      <div className={classes.container}>
        <div className={classes.inputs}>
          <div className={classes.inputBlock}></div>
          <div className={classes.inputBlock}></div>
          <div className={classes.inputBlock}></div>
        </div>
        <div className={classes.output}>
          <div style={{ margin: "60px auto" }}>
            <div className={classes.circlePie}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
