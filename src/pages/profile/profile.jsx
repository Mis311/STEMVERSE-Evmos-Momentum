// Profile
export default (props) => {
  return (
    <div>
      <h1></h1>
      <div className="user-profile">
        <div className="user-profile-img"></div>
        <div className="user-profile-container">
          {/* Name */}
          <h2>{props.name || "Ley Hanamura"}</h2>

          {/* Info */}
          <div className="row">
            <span className="user-tag">{props.title || "UI Designer"}</span>
            <span className="user-tag-fol">
              Following • {props.following || "11"}
            </span>
            <span className="user-tag-fol">
              Followers • {props.followers || "132k"}
            </span>
          </div>

          {/* Description */}
          <div>
            {props.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
          </div>
        </div>
      </div>
    </div>
  );
};
