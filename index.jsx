import React from 'react';
import ReactDOM from 'react-dom/client';
import Badges from './components/Badge/Badges'
import Banners from './components/Banner/Banners'
import Cards from './components/Card/Cards'
import Testimonials from './components/Testimonial/Testimonials'

function App() {
  return (
    <>
      <h5>Badges</h5>
      <Badges />
      <h5>Banners</h5>
      <Banners />
      <h5>Cards</h5>
      <Cards />
      <h5>Testimonials</h5>
      <Testimonials />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
