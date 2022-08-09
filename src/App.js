import Header from './components/header/header';
import Abou_me from './components/about_me/Abou_me';
import Footer from './components/footer/footer';
import Portofilio from './components/portofilio/portofilio';
import Skills from './components/skills/skills';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Abou_me></Abou_me>
      <Skills></Skills>
      <Portofilio></Portofilio>
      <Footer></Footer>

    </div>
  );
}

export default App;
