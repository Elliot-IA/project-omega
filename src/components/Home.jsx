import '../styles/Home.styles.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className='home-header'>Welcome to the&nbsp;<i>Functional Codenomics</i>&nbsp;Additional Resources Page!</div>
      
      <div className="circular-menu">
        <div className="menu-item item-1"><button onClick = {() => navigate('/interaction-codenomics')}>Interaction Codenomics</button></div>
        <div className="menu-item item-2"><button onClick = {() => navigate('/activity-based-codenomics')}>Activity Based Codenomics</button></div>
        <div className="menu-item item-3"><button onClick = {() => navigate('/structural-codenomics')}>Structural Codenomics</button></div>
        <div className="menu-item item-4"><button onClick = {() => navigate('/ptm-codenomics')}>PTM Codenomics</button></div>
        <div className="menu-item item-5"><button onClick = {() => navigate('/special-codenomics')}>Special Codenomics</button></div>
        <div className="menu-item item-6"><button onClick = {() => navigate('/temporal-codenomics')}>Temporal Codenomics</button></div>

        <img className="home-logo" src={require('../assets/project_omega_logo.png')} alt="logo" />
      </div>
    </div>

  );
};

export default Home;
