import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.js';
import Footer from './components/footer.js'
import Upload from './components/upload'

function App() {
  return (
    <div>
        <Nav />
        <body>
          <Upload/>
        </body>
        <Footer />
    </div>
    
  );
}

export default App;
