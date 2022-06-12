import Image from 'next/image'

const Accreditation = () => {
  return (
    <div className='text-center'>
      <h2 className='sub-heading'>Accreditation</h2>
      <div className='flex flex-col justify-center md:flex-row'>
        <Image
          src='/accreditation.jpg'
          alt='accreditation'
          width={200}
          height={200}
        />
        <Image
          src='/accreditation.jpg'
          alt='accreditation'
          width={200}
          height={200}
        />
        <Image
          src='/accreditation.jpg'
          alt='accreditation'
          width={200}
          height={200}
        />
        <Image
          src='/accreditation.jpg'
          alt='accreditation'
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Accreditation
