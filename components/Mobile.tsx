import Config from '../app.json'

const MobileDetails = () => {
  return (
    <a className="font-semibold" href={`tel:${Config.mobile_no}`}><i className="fa fa-solid fa-mobile"></i> {' '} {Config.mobile_no}</a>
  );
}

export default MobileDetails