import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Backtotop from './components/Backtotop';

function App() {
  return (
    <>
      <Backtotop/>
      {/* <Preloader/> */}
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
