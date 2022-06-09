import { useState, useEffect } from "react"

interface ContactUsProps {
  displayEnquiryForm: boolean;
  onConfirmation: () => void;

}

const ContactUs = ({ displayEnquiryForm, onConfirmation }: ContactUsProps) => {

  const [loading,setLoading] = useState(false)
  const [formInputs,setFormInputs] = useState({
    name: '',
    email: '',
    products: '',
    phone: '',
    others: '',
    message: ''
  })

  const resetParameters = () => {
    setFormInputs({
      name: '',
      email: '',
      products: '',
      phone: '',
      others: '',
      message: ''
    })
    if(displayEnquiryForm) {
      onConfirmation()
    }
  }

  useEffect(() => {

  },[])

  const sendMail = async () => {

    try {
      const products = await fetch('/api/products')
      setLoading(true)
      await fetch("/api/sendGridMail", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify({
          ...formInputs
        })
      })
      resetParameters()
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  console.log(formInputs)

  if(displayEnquiryForm) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black" style={{ maxWidth: 500, background: 'white'}} id="enquiry">
        <div className='flex justify-between px-3 py-3'>
          <h3 className="text-1xl">Enquiry Now</h3>
          <button className='text-xl' onClick={() => onConfirmation()}>X</button>
        </div>
        <div className="flex max-w-3xl overflow-hidden justify-center flex-wrap">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
            bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" 
            name='name' 
            value={formInputs.name} 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            placeholder="Email" 
            className="w-full mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
            bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            name='Your Email' 
            value={formInputs.email}
            onChange={handleInputChange} />
          <input 
            type="text" 
            placeholder="Your Phone" 
            className="w-full mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
            bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            name='phone' 
            value={formInputs.phone}
            onChange={handleInputChange} />
          <input 
            type="text" 
            placeholder="Message" 
            className="w-full mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
            bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            name='Message' 
            value={formInputs.others}
            onChange={handleInputChange} />
          <button className="px-3 h-11 w-56 mx-5 my-5 text-white brand-bg-red-color rounded-xl description-text" onClick={sendMail}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
    </div>
    )
  }

  return (
    <div className="flex flex-col items-center my-10" id="contactus">
      <h3 className="text-4xl">CONTACT US</h3>
      <div className="flex max-w-3xl overflow-hidden justify-center flex-wrap">
        <input 
          type="text" 
          placeholder="Name" 
          className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
          bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          name='name' 
          value={formInputs.name}
          onChange={handleInputChange} />
        <input 
          type="text" 
          placeholder="Email" 
          className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
          bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          name='email' 
          value={formInputs.email}
          onChange={handleInputChange} />
        <input 
          type="text" 
          placeholder="Products" 
          className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white
          bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          name='products' 
          value={formInputs.products}
          onChange={handleInputChange} />
        <input 
          type="text" 
          placeholder="Phone" 
          className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
          bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          name='phone' 
          value={formInputs.phone}
          onChange={handleInputChange} />
        <input 
          type="text" 
          placeholder="others" 
          className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
          bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          name='others' 
          value={formInputs.others}
          onChange={handleInputChange} />
        <button className="px-3 h-11 w-56 mx-5 my-5 text-white brand-bg-red-color rounded-xl description-text" onClick={sendMail}>
          {loading ? 'Sending...' : 'Contact Us'}
        </button>
      </div>
    </div>
  );
}

export default ContactUs
