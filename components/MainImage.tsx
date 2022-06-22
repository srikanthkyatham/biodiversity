import { useEffect } from "react";
import { Particle } from 'jparticles'

const MainImage = () => {

  useEffect(() => {
    if(process.browser) {
      new Particle('#demo', {
        proximity: 100
      })
    }
  }, [])
  
  return (
    <div className='relative'>
      <div className='main-image' style={{ width: 'calc(98vw)', height: 'calc(80vh)', position: 'relative' }} id='demo' />
      <div className="brand-tag-overlay-effect">
        <h2 className="red-font">Delivering</h2>
        <h2 className="black-font">Diligent</h2>
        <h2 className="red-font">Solutions</h2>
      </div>
      <div className="mobile-brand-tag-overlay-effect">
        <span className="red-font">Delivering </span>
        <span className="black-font">Diligent </span>
        <span className="red-font">Solutions</span>
      </div>
    </div>
  );
}

export default MainImage
