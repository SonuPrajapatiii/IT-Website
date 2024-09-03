import './App.css';
import Header from './assests/components/Navbar.jsx'
import Footer from './assests/components/Footer/Footer.jsx'
import Hero from './assests/components/Hero'
import BrandsLogo from './assests/components/BrandsLogo'
import Services from './assests/components/Services'
import Whychooseus from './assests/components/Whychooseus'
import Testimonial from './assests/components/Testimonial'

function App() {
  return (
    <div className='App'>
    <Header/>
    <Hero/>
    <BrandsLogo/>
    <Services/>
    <Whychooseus/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}
export default App;
