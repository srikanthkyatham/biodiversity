import { useEffect, useState } from "react";
import ContactUs from "./ContactUs";

const EnquiryForm = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisplay(true), 20000);
  }, []);

  return (
    <>
      {display && (
        <ContactUs
          displayEnquiryForm
          onConfirmation={() => setDisplay(false)}
        />
      )}
    </>
  );
};

export default EnquiryForm;
