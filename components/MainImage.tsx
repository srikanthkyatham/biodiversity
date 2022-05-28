import { useEffect } from "react";
import { Particle } from 'jparticles'

const MainImage = () => {

  useEffect(() => {
    if(process.browser) {
      new Particle('#demo', {
        proximity: 190
      })
    }
  }, [])
  
  return (
    <div className='main-image' style={{ width: 'calc(99vw)', height: 'calc(100vh)', position: 'relative', backgroundImage: 'url(/MainImage.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} id='demo' />
  );
}

export default MainImage
