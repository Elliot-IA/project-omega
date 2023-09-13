import '../styles/Home.styles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home-container">
    
      <div className='home-header'>Welcome to the&nbsp;<i>Functional Codenomics</i>&nbsp;Additional Resources Page!</div>
      
      <div className="circular-menu">

        <div className="menu-item item-1 card">
          <img className="imgSize card-front" src={require("../assets/Figure_1.png")} alt=""/>
          <button className="card-back" onClick = {() =>{ document.getElementById("root").style = "background-color: blue"; navigate('/interaction-codenomics'); }}>Interaction Codenomics</button>
        </div>

        <div className="menu-item item-2 card">
          <img className="imgSize card-front" src={require("../assets/Figure_2.png")} alt=""/>
          <button className="card-back" onClick = {() => navigate('/activity-based-codenomics')}>Activity Based Codenomics</button>
        </div>

        <div className="menu-item item-3 card">
          <img className="imgSize card-front" src={require("../assets/Figure_3.png")} alt=""/>
          <button className="card-back" onClick = {() =>{ document.getElementById("root").style = "background-color: blue";  navigate('/structural-codenomics')}}>Structural Codenomics</button>
        </div>

        <div className="menu-item item-4 card">
          <img className="imgSize card-front" src={require("../assets/Figure_4.png")} alt=""/>
          <button className="card-back" onClick = {() =>{ document.getElementById("root").style = "background-color: blue";  navigate('/ptm-codenomics')}}>PTM Codenomics</button>
        </div>

        <div className="menu-item item-5 card">
          <img className="imgSize card-front" src={require("../assets/Figure_5.png")} alt=""/>
          <button className="card-back" onClick = {() =>{ document.getElementById("root").style = "background-color: blue";  navigate('/special-codenomics')}}>Special Codenomics</button>
        </div>

        <div className="menu-item item-6 card">
          <img className="imgSize card-front" src={require("../assets/Figure_6.png")} alt=""/>
          <button className="card-back" onClick = {() =>{ document.getElementById("root").style = "background-color: blue";  navigate('/temporal-codenomics')}}>Temporal Codenomics</button>
        </div>

        <img className="home-logo" src={require('../assets/project_omega_logo.png')} alt="logo" />
      </div>

      <script>document.getElementById("root").style = "background-color = white";</script>
    </div>
  );
};

export default Home;
