import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Subpage from './components/Subpage';

const propImages = {
  "interaction-codenomics": [
    "assets/Figure_1.1.png",
    "assets/Figure_1.2.png",
    "assets/Figure_1.3.png",
    "assets/Figure_1.4.png"
  ],
  "activity-based-codenomics": [
    "assets/Figure_2.1.png",
    "assets/Figure_2.2.png",
    "assets/Figure_2.3.png",
    "assets/Figure_2.4.png"
  ],
  "structural-codenomics": [
    "assets/Figure_3.1.png",
    "assets/Figure_3.2.png",
    "assets/Figure_3.3.png",
    "assets/Figure_3.4.png"
  ],
  "ptm-codenomics": [
    "assets/Figure_4.1.png",
    "assets/Figure_4.2.png",
    "assets/Figure_4.3.png",
    "assets/Figure_4.4.png"
  ],
  "special-codenomics": [
    "assets/Figure_5.1.png",
    "assets/Figure_5.2.png",
    "assets/Figure_5.3.png",
    "assets/Figure_5.4.png"
  ], 
  "temporal-codenomics": [
    "assets/Figure_6.1.png",
    "assets/Figure_6.2.png",
    "assets/Figure_6.3.png",
    "assets/Figure_6.4.png"
  ]
}

function App() {
  return (
    <Router>
          <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

          <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

          <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

          <script>var Alert = ReactBootstrap.Alert;</script>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/interaction-codenomics" element={<Subpage title="Interaction Codenomics" images={propImages['interaction-codenomics']} />} />
        <Route path="/activity-based-codenomics" element={<Subpage title="Activity Based Codenomics" images={propImages['activity-based-codenomics']} />} />
        <Route path="/structural-codenomics" element={<Subpage title="Structural Codenomics" images={propImages['structural-codenomics']} />} />
        <Route path="/ptm-codenomics" element={<Subpage title="PTM Codenomics" images={propImages['ptm-codenomics']} />} />
        <Route path="/special-codenomics" element={<Subpage title="Special Codenomics" images={propImages['special-codenomics']} />} />
        <Route path="/temporal-codenomics" element={<Subpage title="Temporal Codenomics" images={propImages['temporal-codenomics']} />} />

      </Routes>
    </Router>

  );
}

export default App;
