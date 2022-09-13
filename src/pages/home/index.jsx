import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Layout from "../../components/layouts/single-sided";

function Title(props) {
  return (
    <div className={"title " + props.className}>
      <h1>{props.content || "Stemverse Land"}</h1>
      <hr />
    </div>
  );
}
function Home_Index() {
  return (
    <div className="home__section_1 row space-between min-screen-height">
      {/* Title 1 */}
      <div className="home__title">
        <h1>STEM</h1>
        <div className="row space-between">
          <Button caps={1} content="Connect" className="primary-color" />
          <Button caps={1} content="Info" className="primary-color" />
        </div>
      </div>

      {/* Title 2 */}
      <div>
        <Title content="Verse" className="home__title primary-color" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
}

function Home_About() {
  return (
    <div className="home__section_2 min-screen-height">
      <h2>About</h2>
      <hr />
      {/* Container */}
      <div className="container">
        {/*  */}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>

      {/* Container */}
      {/* <Number content='01'/> */}
    </div>
  );
}

function Card(props) {
  <div className="card">
    <div className="card__image"></div>
  </div>;
}
function Home_Story() {
  return (
    <div className="home__section_3 min-screen-height">
      <h2>Story</h2>
      <hr />
      <div>
        <div className="home__card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sit provident dolore nulla impedit voluptatem illo facere officiis,
          veritatis quidem earum atque ea temporibus optio molestiae nihil
          quibusdam doloribus eaque.
          <div className="card__style_1"></div>
          {/* 
          <Card />
          <Card />
          <Card />
          <Card /> 
          */}
        </div>
      </div>
    </div>
  );
}

function CardContianer(props) {
  return (
    <div>
      <div>
        <h2>{props.name || "Learn as You Earn"}</h2>
        <p>
          {props.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam voluptate voluptates."}
        </p>
      </div>
      <Card />
    </div>
  );
}

function Home_Game_And_Features() {
  return (
    <div className="home__section_4 min-screen-height">
      <h2>Games And Features</h2>
      <hr />

      {/* Containers */}
      <CardContianer />
    </div>
  );
}
function Newsletter() {
  return <div className="home__section_5 min-screen-height"></div>;
}

export default function Home(props) {
  return (
    <Layout>
      <Home_Index />
      <Home_About />
      <Home_Story />
      <Home_Game_And_Features />
      <Newsletter />
    </Layout>
  );
}
