import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css";

interface calculator {
  eachCalculator: {
    header: string;
    sub_text: string;
    footer_image: string;
    cta: {
      calculator_type: string;
      path: string;
    };
  };
}

export default function Card(props: calculator) {
  const navigate = useNavigate();
  return (
    <div
      className={classes.card}
      onClick={() => navigate(`/${props.eachCalculator.cta.path}`)}
    >
      <p className={classes.title}>{props.eachCalculator.header}</p>
      <p className={classes.discription}>{props.eachCalculator.sub_text}</p>
      <img className={classes.image} src={props.eachCalculator.footer_image} />
    </div>
  );
}
