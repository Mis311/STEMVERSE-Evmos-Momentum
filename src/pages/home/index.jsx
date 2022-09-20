import Button from "../../components/button/button";
import Layout from "../../components/layouts/single-sided";
import { useRef } from "react";

function Title(props) {
  if (props.center)
    return (
      <div className="title full-width vr-center flex">
        <h2 className={"center-text h-line " + props.className}>
          {props.content}
        </h2>
      </div>
    );

  return (
    <h2 className={"center-text h-line title " + props.className}>
      {props.content}
    </h2>
  );

  // <div className={"title " + props.className}>
  //   <h2>{props.content || "Stemverse Land"}</h2>
  //   <hr />
  // </div>
}

function Home_Index() {
  return (
    <div className="home__section_1 min-screen-height">
      <div className="row full-width space-between">
        {/* Title 1 */}
        <div className="home__title">
          <h1 className="uppercase">STEM</h1>
          <div className="row">
            <Button caps={1} content="Connect" className="primary-color" />
            <Button caps={1} content="Info" className="primary-color" />
          </div>
        </div>

        {/* Title 2 */}
        <div className="home__title">
          <Title
            content="Verse"
            className="uppercase primary-color no-margin"
          />
          <p>
            Connect with STEM (Science, Technilogy, Engineering &nbsp; Mathmatics) learners and workers to revive the lost Mega STEM World City, a.k.a STEMVERSE.
          </p>
        </div>
      </div>
    </div>
  );
}

function Home_About() {
  return (
    <div className="home__section_2 min-screen-height" id="about">
      <Title center={true} content="About" />

      {/* Container */}
      <div className="container">
        {/* Container */}
        <div className="home__card">
          <div>
            <p>
              STEMVERSE is another dimention of our world.	<br />
              In another world, technology advanced faster than us and got ruined by some "human-related disaster". The case files and hints are scattered in the ruin of STEMVERSE.
            </p>

            <p>
              As a new STEMVERSE resident, your goal is to match up with other users and complete daily tasks, including your homeworks and project as well as collaborative online projects as a programmer and scientist.
            </p>

            <p>
              You as a carrier of STEM, STEMVERSE and our world gets closer and coldsleep characters will be able to revive and walk on earth again as more world NFTs you will collect and solve mysteries.
            </p>

            <p>
              In the torn world of STEMVERSE, the story continues in two ways: past and present. In the past, there was disaster that led to STEMVERSE. In the STEMVERSE World, you can meet the past residents, now in coldsleep state, through exploring our metaverse and also by doing a slot. In order to earn tokens you can login daily, take online courses, complete STEM related tasks and socialize. Ghosts will drop some hints and keywords what happened, and in present it is up to your contribution to revive the lost world, and make it even more alive.
            </p>
          </div>
        </div>
      </div>

      {/* Container */}
      {/* <Number content='01'/> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className={"card__style_1 " + props.className}>
      <div className="card__image"></div>
    </div>
  );
}

let stories = [
  {
    category: 'Science Empire',
    description: 'The home for all science learners, from biochemistry to neuroscience, either interest or job, comes together and learn/work together.',
    image: 'https://images.indianexpress.com/2022/07/midjourney-featured.png'
  },
  {
    name: 'Technology Nation',
     description: 'Programmers and data scientists come home, mingle and gingle and develop ',
    image: 'https://images.indianexpress.com/2022/07/monsoon-midjourney-2.png?resize=600,600'
  },
  {
    name: 'Engineering Union',
    description: 'Engineers of universities, professionals, or DIY engineers belong here to study, work and earn.',
    image: 'https://i.pinimg.com/originals/c6/bd/06/c6bd06d037065db6c5c59d618d1d1753.png'
  },
    {
    name: 'Mathematics Federation',
    description: 'From the statistics to heavy carriculation, anyone fascinated by numbers, we have your home nest consisted from 0 and 1',
    image: 'https://cdna.artstation.com/p/assets/images/images/050/301/526/large/teo-mathlein-c306a643-640e-43ea-b2d8-81bf3a20ec56-teomath-httpss-mj-runajnasu-kowloon-walled-city-slums-unreal-engine-environment-concept-art-trending-on-art.jpg?1654539468'
  },
  
]

function StoryCard(props) {
  return (
    <div
      className={"card__style_1 " + props.className}
      style={{
        background: `url(${props.image})`,
      }}
    >
      <OnStoryCard {...props} />
    </div>
  );
}

function OnStoryCard(props) {
  return (
    <div>
      {/* Lesser z-index and has an overlay */}
      <div
        className="on_story_card_bg"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" +
            props.image +
            ")",
        }}
      ></div>

      {/* Cross */}
      <div className="full-width row flex-end">X</div>

      {/* Scrollable Data */}
      <div className={"card__style_1 " + props.className}>
        <h2>
          {/* <span>World: </span> {props.title || "Newl Astorpic"} */}<span>World: STEM</span> {props.category || "STEMVERSE"}	
        </h2>
        <p>
          {props.description}{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

function Home_Story() {
  return (
    <div className="home__section_3 min-screen-height" id="story">
      <Title content="Story" />
      <div>
        <div>
          Once upon a time, humanity has reached its highest form, the greatest realm, and the city had the significant 4 divisions:<em>Science, Tech, Engineering, and Math</em>. <br />Now at the same place, the regions are governed by a surviving DAO. All that remain are philosophers' dreams.
          <div className="flex flex-wrap vr-center hs3_card_container">
            {/* Section 1 */}
            <div className="row">
              {stories.map((story, index) => {
            return (
          <StoryCard
            key={index}
            category={story.category}
            description={story.description}
            image={story.image}
              />
  )}
)}
            </div>

            {/* Section 2 */}
            <div className="row">
              <StoryCard />
              <StoryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardContianer(props) {
  return (
    <div className="row space-between card-container">
      {/* Text & Description */}
      <div className={"column " + props.position1 || ""}>
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
    <div className="home__section_4 min-screen-height" id="games-and-features">
      <Title center={true} content="Games And Features" />
      <div className="column">
        {/* Containers */}
        <CardContianer position1="order-1" position2="order-2" />
        <CardContianer position1="order-2" position2="order-1" />
        <CardContianer position1="order-1" position2="order-2" />
        <CardContianer position1="order-2" position2="order-1" />
      </div>
    </div>
  );
}

function Newsletter() {
  let newsletter = useRef(null);
  return (
    <div className="home__section_5 min-screen-height row hr-center">
      {/* Background */}
      <div className="newsletter__background min-screen-height"></div>

      {/* Content */}
      <div className="newsletter-contents vr-center">
        <h2>Newsletter</h2>
        <p>
          Join the updates squad to remain updated about new earning stratgies,
          updates, and even story updates to hope over to another level 😀
        </p>
        <div className="space-e">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(newsletter.current.value);
              newsletter.current.value = "";
            }}
          >
            <input type="email" placeholder="Email" ref={newsletter} />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Home(props) {
  return (
    <Layout user={props.user} navigation={props.navigation}>
      <Home_Index />
      <Home_About />
      <Home_Story />
      <Home_Game_And_Features />
      <Newsletter />
    </Layout>
  );
}
