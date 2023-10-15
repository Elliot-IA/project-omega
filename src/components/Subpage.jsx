import '../styles/Subpage.styles.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Subpage = ({ text, images, title }) => {
  
  const navigate = useNavigate();
  console.log(images)
  const handleReturnToHome = () => {
    document.getElementById("root").style = "background-color: white"; 
    navigate('/');
    return
  }

  return (
  <div className="subpageBodyContainer">
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossorigin></script>

    <script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossorigin></script>

    <script>var Alert = ReactBootstrap.Alert;</script>



    <div className='home-header'>
        <Button variant="primary">Primary</Button>{'...'}
        <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
        <Button  class="btn btn-primary">Interaction Codenomics</Button>
        <Button class="btn btn-primary">Activity Based Codenomics</Button>
        <Button class="btn btn-primary">Structural Codenomics</Button>
        <Button class="btn btn-primary">PTM Codenomics</Button>
    </div>
    <div className="subpageContainer">
      <h1 id="subpageTitle">{title}</h1>
      <div className="subpageContentContainer">
        <div id="leftContainer">
          <div id="backgroundContainter">
            <div id="backgroundTitle">Background</div> 
            <div id="backgroundText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
          </div>
          <div id="publicationsContainter">
          <div id="publicationsTitle">Latest Publications in Field</div> 
            <div id="publicationsList">  
              Publication 1!   ::   <a href="https://www.example.com">publication link</a><br/>
              Publication 2!   ::   <a href="https://www.example.com">publication link</a><br/>
              Publication 3!   ::   <a href="https://www.example.com">publication link</a><br/>
              Publication 4!   ::   <a href="https://www.example.com">publication link</a><br/>

</div>
          </div>
        </div>

      
        <div id="rightContainer">
          <div className="imageGrid">
            {images.map((image, index) => {
              return (
                <img className="subpageImg" src={require("../" + image)} />
              )
            })}
          </div>
        </div>
      </div>


      <button onClick={handleReturnToHome} id="homeButton">Back to Home</button>
      
      <script>document.getElementById("root").class = "body-background";</script>
    </div>
    </div>

  )
}

export default Subpage