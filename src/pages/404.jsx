import { Link } from "react-router-dom";
export default function Error404() {
  return (
    <div className="error min-screen-height column hr-center vr-center">
      <div>
        <span className="error__abstract-box_1"></span>
        <h1>404</h1>
        <span className="error__abstract-box_2"></span>
      </div>
      <p>
        You just landed in a restricted zone that is yet to be discovered, for
        your security, we created this back button to teleport you to a safe
        zone.{" "}
        <span className="primary-color">
          <strong>
            <em> Enabling Secure Root and Readying Systems </em>
          </strong>
        </span>
      </p>
      <Link to="/">
        <button className="btn-2">Head Back</button>
      </Link>
    </div>
  );
}
