import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Subpage from './components/Subpage';

const propImages = {
  "interaction-codenomics": [
    "assets/Figure_2.1.png",
    "assets/Figure_2.2.png",
    "assets/Figure_2.3.png",
    "assets/Figure_2.4.png"
  ],
  "activity-based-codenomics": [
    ""
  ],
  "structural-codenomics": [
    ""
  ],
  "ptm-codenomics": [
    ""
  ],
  "special-codenomics": [
    ""
  ],
  "temporal-codenomics": [
    ""
  ]
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/interaction-codenomics" element={<Subpage title="Interaction Codenomics" images={propImages['interaction-codenomics']} />} />
        <Route path="/activity-based-codenomics" element={<Subpage title="Activity Based Codenomics" images={propImages['activity-based-codenomics']} />} />
        <Route path="/structural-codenomics" element={<Subpage title="Structural Codenomics" />} />
        <Route path="/ptm-codenomics" element={<Subpage title="PTM Codenomics" />} />
        <Route path="/special-codenomics" element={<Subpage title="Special Codenomics" />} />
        <Route path="/temporal-codenomics" element={<Subpage title="Temporal Codenomics" />} />

      </Routes>
    </Router>

  );
}

export default App;
