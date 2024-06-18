import classes from "./Styles.module.css";
interface Props {
  context: string;
}
export default function InputTitle(props: Props) {
    return(

        <h2 className={classes.title}>{props.context}</h2>
    )
}
