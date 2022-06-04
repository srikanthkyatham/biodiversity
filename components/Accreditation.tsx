import Image from 'next/image'

const Accreditation = () => {
  return (
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
  );
}

export default Accreditation
