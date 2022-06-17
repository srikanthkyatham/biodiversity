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
      <h1 className='h1-tag-overlay-effect'>Diligent Solutions</h1>
    </div>
  );
}

export default MainImage
