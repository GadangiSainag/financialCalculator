import classes from "./Faq.module.css";
import { CalculatorType, FaqItem } from "../utils/types";
interface Props {
  faqData: CalculatorType["faqs"];
}
export default function FaqSection(props: Props) {
  return (
    <div>
      <h2>{props.faqData.header}</h2>
      {props.faqData.items &&
        props.faqData.items.map((eachFaq: FaqItem, index: number) => {
          return (
            <div className={classes.faq} key={index}>
              <input type="checkbox" id={index.toString()} />
              <label htmlFor={index.toString()}>
                <p className={classes.faqHeading}>{eachFaq.question}</p>
                <div className={classes.faqArrow}></div>
                <p className={classes.faqText}>{eachFaq.answer}</p>
              </label>
            </div>
          );
        })}
    </div>
  );
}
