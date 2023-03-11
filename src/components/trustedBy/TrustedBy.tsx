import "./TrustedBy.scss";
//images
import googlePng from "~/assets/images/google.png";
import metaPng from "~/assets/images/meta.png";
import netflixPng from "~/assets/images/netflix.png";
import pgPng from "~/assets/images/p&g.png";
import paypalPng from "~/assets/images/paypal.png";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted by:</span>

        <ul>
          <li>
            <picture>
              <img src={metaPng} alt="Meta" className="meta" />
            </picture>
          </li>

          <li>
            <picture>
              <img src={googlePng} alt="Google" />
            </picture>
          </li>

          <li>
            <picture>
              <img src={netflixPng} alt="Netflix" />
            </picture>
          </li>

          <li>
            <picture>
              <img src={pgPng} alt="P&G" />
            </picture>
          </li>

          <li>
            <picture>
              <img src={paypalPng} alt="Paypal" />
            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrustedBy;
