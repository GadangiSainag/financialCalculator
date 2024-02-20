import { useNavigate } from "react-router-dom";
import classes from "./LandingPage.module.css";

export default function LandingPage() {
  const navigate =useNavigate();
  return (
    <div>
      <div className={classes.cardContainer}>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>

        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
        <div className={classes.card} onClick={() => navigate('/calculator')}>
          <p className={classes.title}>Title</p>
          <p className={classes.discription}>
            This is some discreption related to the calculator that consists few
            lines.
          </p>
          <img
            className={classes.image}
            src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/_next/static/media/sip.81144080.png"
          />
        </div>
      </div>
      hello
    </div>
  );
}
