import logo from './logo.svg';
import './App.css';
import Top from './component/Top';
import LinkBar from './component/LinkBar';
import Img from './component/Img';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Top></Top>
      <LinkBar></LinkBar>
      <Img></Img>
    </div>
  );
}

export default App;
