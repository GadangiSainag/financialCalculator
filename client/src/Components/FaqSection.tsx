import classes from "./Faq.module.css";
import { calculatorType, faqItem } from "../utils/types";
interface Props {
  faqData: calculatorType["faqs"]
}
export default function FaqSection(props: Props) {
  return (
    <div>
      <h2>{props.faqData.header}</h2>
      {props.faqData.items && props.faqData.items.map((eachFaq: faqItem ,index:number) => {
        return (
          <div className={classes.faq}>
            <input type="checkbox" id={index.toString()} />
            <label htmlFor={index.toString()}>
              <p className={classes.faqHeading}>
                {eachFaq.question}
              </p>
              <div className={classes.faqArrow}></div>
              <p className={classes.faqText}>
                {eachFaq.answer}
              </p>
            </label>
          </div>
        );
      })}
    </div>
  );
}
