import { useState } from "react"

const ContactUs = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [products,setProducts] = useState('')
  const [phone,setPhone] = useState('')
  const [others,setOthers] = useState('')
  const [loading,setLoading] = useState(false)

  const resetParameters = () => {
    setName('')
    setEmail('')
    setProducts('')
    setPhone('')
    setOthers('')
  }

  const sendMail = async () => {

    try {
      setLoading(true)
      await fetch("/api/sendGridMail", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify({
          name,
          email,
          products,
          mobileNo: phone,
          others
        })
      })
      resetParameters()
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  return (
    <div className="flex flex-col items-center my-10" id="contactus">
      <h3 className="text-4xl">CONTACT US</h3>
      <div className="flex max-w-3xl overflow-hidden justify-center flex-wrap">
        <input type="text" placeholder="Name" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Products" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white
         bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={products} onChange={(e) => setProducts(e.target.value)} />
        <input type="text" placeholder="Phone" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="others" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={others} onChange={(e) => setOthers(e.target.value)} />
        <button className="px-3 h-11 w-56 mx-5 my-5 text-white brand-bg-red-color rounded-xl description-text" onClick={sendMail}>
          {loading ? 'Sending...' : 'Contact Us'}
        </button>
      </div>
    </div>
  );
}

export default ContactUs
