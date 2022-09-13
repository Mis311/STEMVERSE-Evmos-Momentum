import Line from "../abstract/line";
import SocialIcons from "../social-icons";
export default function Layout(props) {
  return (
    <div className="row">
      <SocialIcons className="column" />

      <div>{props.children}</div>
    </div>
  );
}

export function Logged_Layout(props) {
  return;
}
