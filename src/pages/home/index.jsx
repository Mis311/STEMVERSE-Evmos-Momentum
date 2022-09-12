import { Link } from "react-router-dom";
import Button from "../../components/button/button"
import Layout from "../../components/layouts/single-sided"

export default function Home(props) {
  return (
    
    <Layout>

      <div className='row space-evenly'>
        <h1 className='title-1 row'>STEM</h1>
        <h1 className='title-2'>VERSE</h1>
      </div>

      <Button caps={1} content='Connect' />
      <Button caps={1} content='Info' />
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    
    </Layout>

  )

}
