import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Goals from './components/Goals';
import SEO from './components/SEO';
import { OrganizationStructuredData, WebsiteStructuredData } from './components/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO />
      <OrganizationStructuredData />
      <WebsiteStructuredData />
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <Programs />
      <Impact />
      <Team />
      <Sponsors />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;