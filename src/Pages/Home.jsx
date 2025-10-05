import Layout from '../Components/Layout/Layout';
import  {Link}  from 'react-router-dom'
import banner from "../assets/foodimg.jpg";
import "../Styles/HomeStyle.css"
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage: `url(${banner})` }}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best food in India</p>
            <Link to='/menu' >
            <button>
              ORDER NOW
            </button>
            </Link>
          </div>

        </div>
    </Layout>
  )
}

export default Home;