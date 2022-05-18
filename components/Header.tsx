import Config from '../app.json'

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row px-5 py-5" id="header">
      <img src="/logo.png" />
      <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-xl" placeholder="Search Products..." />
            <div className="absolute top-4 right-3">
              <i className="text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
          </div>
        </div>
      <div className="flex flex-col items-end space-y-1">
        <a className="font-semibold" href={`tel:${Config.mobile_no}`}>Phone: {Config.mobile_no}</a>
        <a className="font-semibold" href={`mailto:${Config.email}`}>Email: {Config.email}</a>
      </div>
    </div>
  );
}

export default Header
