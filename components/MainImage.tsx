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
    <div className='main-image' style={{ width: 'calc(99vw)', height: 'calc(100vh)', position: 'relative' }} id='demo'>
      <p>here</p>
    </div>
  );
}

export default MainImage
