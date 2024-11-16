import './App.css';
import Button from './components/button/button.jsx';
import NavBar from "./components/navbar/NavBar.jsx";
import Logo from "./components/logo/DiscordLogo.jsx";
import Title from "./components/title/title.jsx";
import Text from "./components/text/text.jsx";
import Background from "./assets/discord-background.png";


function App() {
  return (
    <div className="App">

      <div className="header">
        <Logo />
        <NavBar />
      </div>
      <section className="intro-text">
        <Title text="Imagine a place ..."></Title>
        <Text text="...where you can belong to a school club, a gaming group, 
          or a worldwide art community. Where just you and a handful of friends 
          can spend time together. A place that makes it easy to talk every day 
          and hang out more often."></Text>
      
        <Button type="download" text="Download for Mac" />
        <Button type="browser" text="Open discord in your browser" />
      </section>
      <img
        src={Background}
        className="Background"
       alt="characters"
      ></img>

    </div>
  );
}

export default App