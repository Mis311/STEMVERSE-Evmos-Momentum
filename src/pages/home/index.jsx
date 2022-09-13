import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Layout from "../../components/layouts/single-sided";

function Title(props) {
  if (props.center) return (
    <div className='full-width vr-center flex'>
      <h2 className='center-text h-line'>{props.content}</h2>
    </div>
  );

  return (
    <h2 className='center-text h-line'>{props.content}</h2>
  );

  // <div className={"title " + props.className}>
  //   <h2>{props.content || "Stemverse Land"}</h2>
  //   <hr />
  // </div>
}

function Home_Index() {
  return (
    <div className="home__section_1 row space-between min-screen-height">
      {/* Title 1 */}
      <div className="home__title">
        <h1 className='uppercase'>STEM</h1>
        <div className="row space-between">
          <Button caps={1} content="Connect" className="primary-color" />
          <Button caps={1} content="Info" className="primary-color" />
        </div>
      </div>

      {/* Title 2 */}
      <div className='home__title' >
        <h2 className='primary-color uppercase h-line'>Verse</h2>
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
      <Title center={true} content='About' />

      {/* Container */}
      <div className="container">
        {/* Container */}
        <div className='home__card'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          </p>
        </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          </p>
        </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          </p>
        </div>
      </div>

      {/* Container */}
      {/* <Number content='01'/> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className={"card__style_1 " + props.className} >
      <div className="card__image"></div>
    </div>
  )
}

function Home_Story() {
  return (
    <div className="home__section_3 min-screen-height">
      <Title content='Story' />
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sit provident dolore nulla impedit voluptatem illo facere officiis,
          veritatis quidem earum atque ea temporibus optio molestiae nihil
          quibusdam doloribus eaque.
          <div className='flex flex-wrap vr-center hs3_card_container'>
            {/* Section 1 */}
            <div className='row'>
              <Card />
              <Card />
            </div>

            {/* Section 2 */}
            <div className='row'>
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardContianer(props) {
  return (
    <div className='row space-between card-container'>
      {/* Text & Description */}
      <div className={'column ' + props.position1 || ""}>
        <h2>{props.name || "Learn as You Earn"}</h2>
        <p>
          {props.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam voluptate voluptates."}
        </p>
      </div>

      {/* Image */}
      <Card className={props.position2 || ""} />
    </div>
  );
}

function Home_Game_And_Features() {
  return (
    <div className="home__section_4 min-screen-height">
      <Title center={true} content='Games And Features' />
      <div className='column'>
        {/* Containers */}
        <CardContianer position1='order-1' position2='order-2' />
        <CardContianer position1='order-2' position2='order-1' />
        <CardContianer position1='order-1' position2='order-2' />
        <CardContianer position1='order-2' position2='order-1' />
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="home__section_5 min-screen-height row hr-center">

      {/* Background */}
      <div className="newsletter__background min-screen-height"></div>

      {/* NewsLetter (inside a card) */}
      {/* make sure to use relative or transform: translateX( vh) value */}


      {/* height == min content for this div */}
      <div className='newsletter-contents vr-center'>

        <h2>Newsletter</h2>
        <p className="space-around">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="space-e">
          <label></label>
          <input></input>
          <button>Subscribe</button>

        </div>
        {/* Create an input/label + button */}
      </div>
    </div>
  );
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
