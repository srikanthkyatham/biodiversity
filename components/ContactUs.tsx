const ContactUs = () => {
  return (
    <div className="flex flex-col items-center my-10" id="contactus">
      <h3 className="text-4xl">CONTACT US</h3>
      <div className="flex max-w-3xl overflow-hidden justify-center flex-wrap">
        <input type="text" placeholder="Name" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
        <input type="text" placeholder="Email" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
        <input type="text" placeholder="Products" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white
         bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
        <input type="text" placeholder="Phone" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
        <input type="text" placeholder="others" className="max-w-sm mx-5 my-5 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white 
        bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
        <button className="px-3 h-11 w-56 mx-5 my-5 text-white brand-bg-red-color rounded-xl description-text">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ContactUs
