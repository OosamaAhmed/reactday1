import logo from './logo.svg';
import './App.css';
import Hero from './Hero_section/Hero_section';
import Portolio from './Portolio/Portolio';
import Skill from './Skills_section/Skill';
import Footer from './Footer/Footer';
import Bio from './Bio/Bio';
function App() {
  return (
    <div className="container-fluid">
  
<Hero />
<Bio />
<Portolio />
<Skill />
<Footer />

    </div>
  );
}

export default App;
