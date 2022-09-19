import SocialIcons from "../social-icons";
export default function Layout(props) {
  if (props.user) {
    return (
      <div className={"row " + props.className}>
        {/* Social Icons */}
        <div
          className={"sidebar " + (props.navigation.sidebar && "priority--1")}
        >
          <SocialIcons className="column" />
        </div>

        {/* Application */}
        <div className="single_sided_spacing full-width">{props.children}</div>

        {/* Logged In User Info */}
        <div
          className={"sidebar " + (props.navigation.sidebar && "priority--1")}
        >
          <SocialIcons className="column" />
        </div>
      </div>
    );
  }
  return (
    <div className={"row " + props.className}>
      <div className="sidebar">
        <SocialIcons className="column" />
      </div>

      <div className="single_sided_spacing full-width">{props.children}</div>
    </div>
  );
}
