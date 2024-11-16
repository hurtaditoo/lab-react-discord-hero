import Button from "./assets/components/button/button.jsx";
import NavBar from "./assets/components/navbar/NavBar.jsx";
import Logo from "./assets/components/logo/DiscordLogo.jsx";
import Title from "./assets/components/title/Title.jsx";
import Text from "./assets/components/text/Text.jsx";
import Background from "./assets/img/animals.png";


function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <NavBar />
      </div>

      <section className="intro-text">
        <Title text="Imagine a place ..."></Title>
        <Text text="...where you can belong to a school club, a gaming group, or a 
        worldwide art community. Where just you and a handful of 
        friends can spend time together. A place that makes it easy to 
        talk every day and hang out more often." />
      
        <Button type="download" text="Download for Mac" />
        <Button type="browser" text="Open discord in your browser" />
      </section>

      <img
        src={Background}
        className="Background"
        alt="Animals"
      />

    </div>
  );
}

export default App