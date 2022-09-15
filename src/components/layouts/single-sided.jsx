import Line from "../abstract/line";
import SocialIcons from "../social-icons";
export default function Layout(props) {
  if (props.user) {
    return (
      <div className="row">
        {/* Social Icons */}
        <div className="sidebar">
          <SocialIcons className="column" />
        </div>

        {/* Application */}
        <div className="single_sided_spacing full-width">{props.children}</div>

        {/* Logged In User Info */}
        <div className="sidebar">
          <SocialIcons className="column" />
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="sidebar">
        <SocialIcons className="column" />
      </div>

      <div className="single_sided_spacing full-width">{props.children}</div>
    </div>
  );
}

export function Logged_Layout(props) {
  return;
}
