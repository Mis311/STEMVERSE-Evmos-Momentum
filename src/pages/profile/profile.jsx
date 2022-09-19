import Layout from "../../components/layouts/single-sided";

function StudyTrack(props) {
  return <div className=""></div>;
}

function Card(props) {
  return (
    <div className="profile__card">
      <div className="card-header row hr-center space-between">
        <p>{props.name || "Equipments"}</p>
        <span>→</span>
      </div>
    </div>
  );
}

function ProjectCards(props) {
  return (
    <div className="project__project row space-between">
      {/* Info */}
      <div className="profile__project_container">
        {/* Name & Info */}
        <div>
          <h3>{props.name || "About Firemate"}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            temporibus id quam ab natus ad asperiores ut debitis fuga, nihil
            aspernatur, est enim et sunt dolorum vero possimus, architecto rem?
          </p>
        </div>

        {/* Stacks */}
        <div className="profile__stacks">
          <h3>Stacks</h3>
          <div className="profile__stacks_icons">
            <span>React</span>
            <span>Ploygon</span>
            <span>Express</span>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="project-card__image"></div>
    </div>
  );
}

export default function Profile(props) {
  return (
    <Layout>
      <div className="profile">
        {/* User Profile */}
        <h1 className="light_heading">Profile</h1>

        {/* User Info */}
        <div className="profile__user-profile row hr-center">
          {/* User Image */}
          <div className="profile__user_image_container">
            <div className="profile__user_image"></div>
          </div>

          {/* User Info */}
          <div className="profile__user_container">
            {/* Name */}
            <h2 className="light_heading profile__username">
              {props.name || "Ley Hanamura"}
            </h2>

            {/* Info */}
            <div className="row hr-center">
              <span className="profile__user-tag">
                {props.title || "UI Designer"}
              </span>
              <span className="profile__user-tag-fol">
                Following • {props.following || "11"}
              </span>
              <span className="profile__user-tag-fol">
                Followers • {props.followers || "132k"}
              </span>
            </div>

            {/* Description */}
            <div className="profile__user_desc">
              <p>
                {props.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements and Description */}
        <div>
          <h2 className="light_heading">Achievements | Collections</h2>
          <div className="profile__achievements row">
            <div></div>
            <div className="full-width"></div>
          </div>
        </div>

        {/* Study Tracks */}
        <div>
          <h2 className="light_heading">Study Tracks</h2>
          <div className="profile__study_tracks">
            <StudyTrack />
            <StudyTrack />
            <StudyTrack />
          </div>
        </div>

        {/* Completion & Awards */}
        <div>
          <h2 className="light_heading">Completed Tracks</h2>
          <div className="profile__completion flex-wrap row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="row full-width vr-center hr-center">
            <button className="btn-2">View More</button>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="light_heading">Projects</h2>
          <div className="profile__projects">
            <ProjectCards />
            <ProjectCards />
          </div>
        </div>
      </div>
    </Layout>
  );
}
