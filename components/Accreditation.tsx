/* eslint-disable @next/next/no-img-element */

const Accreditation = () => {
  return (
    <div className='text-center mb-3'>
      <h2 className='sub-heading'>Accreditation</h2>
      <div className='flex flex-col justify-center md:flex-row space-x-4'>
        <img className='accreditation-image'
          src='/acrreditation1.jpg'
          alt='accreditation'
          width={150}
          height={150}
        />
        <img className='accreditation-image'
          src='/accreditation2.jpg'
          alt='accreditation'
          width={150}
          height={150}
        />
        <img className='accreditation-image'
          src='/accreditation3.jpg'
          alt='accreditation'
          width={150}
          height={150}
        />
        <img className='accreditation-image'
          src='/accreditation4.jpg'
          alt='accreditation'
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default Accreditation
