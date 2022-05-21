import { useEffect } from "react";
import { Particle } from 'jparticles'

const MainImage = () => {

  useEffect(() => {
    console.log('here', window)
    if(process.browser) {
      new Particle('#demo', {
        proximity: 190
      })
    }
  }, [])
  
  return (
    <div style={{ width: 'calc(100vw)', height: 'calc(100vh)', position: 'relative', backgroundImage: 'url(/MainImage.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} id='demo' />
  );
}

export default MainImage
