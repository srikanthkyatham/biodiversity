import Config from '../app.json'

const EmailDetails = () => {
  return (
    <a className="font-semibold" href={`mailto:${Config.email}`}><i className="fa fa-solid fa-envelope"></i> {' '} {Config.email}</a>
  );
}

export default EmailDetails