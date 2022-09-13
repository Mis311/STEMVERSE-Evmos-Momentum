import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import Layout from "../../components/layouts/single-sided";

function Section_1() {
  return (
    <div className="min-screen-height">
      <div className="row space-evenly">
        {/* Title 1 */}
        <div>
          <h1 className="home__title row">STEM</h1>
          <Button caps={1} content="Connect" className="primary-color" />
          <Button caps={1} content="Info" className="primary-color" />
        </div>

        {/* Title 2 */}
        <div>
          <h1 className="home__title">VERSE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
    </div>
  );
}

function Section_2() {
  return (
    <div className="min-screen-height">
      {/* <Title content="About" /> */}
      {/* Container */}
      {/* <Number content='01'/> */}
    </div>
  );
}

function Section_3() {
  return <div className="min-screen-height"></div>;
}
function Section_4() {
  return <div className="min-screen-height"></div>;
}
function Section_5() {
  return <div className="min-screen-height"></div>;
}

export default function Home(props) {
  return (
    <Layout>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </Layout>
  );
}
