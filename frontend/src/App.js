import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js';
import Footer from './components/footer.js'
import Upload from './components/upload'
import StudyGuide from './components/study_guide';


function App() {
  return (
    <div>
        <Nav />
        <body>
          <Upload/>
          <StudyGuide/>
        </body>
        <Footer />
    </div>
    
  );
}

export default App;
