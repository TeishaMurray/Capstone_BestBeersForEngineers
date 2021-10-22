import './App.css';
import ListBeer from './components/ListBeer';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
        <div className="main-container">
          <ListBeer />
        </div>
      <Footer />
    </div>
  );
}

export default App;
