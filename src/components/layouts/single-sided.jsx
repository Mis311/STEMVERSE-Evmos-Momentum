import Line from "../abstract/line";
import SocialIcons from "../social-icons";
export default function Layout(props) {
  return (
    <div className="row">
      <div className="sidebar">
        <SocialIcons className="column" />
      </div>

      <div className="single_sided_spacing">{props.children}</div>
    </div>
  );
}

export function Logged_Layout(props) {
  return;
}
