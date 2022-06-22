/* eslint-disable import/no-anonymous-default-export */
import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import Config from "../../app.json";

const key: string = process.env.EMAIL_API_KEY!;

sgMail.setApiKey(key);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, mobileNo, products, name, others } = req.body;
  console.log(req.body);
  const msg = {
    to: Config.email,
    from: Config.secondary_email,
    subject: "Contact From Webpage",
    name,
    text: others,
    html: `<div><a className="font-semibold" href=${`tel:${mobileNo}`}>Phone: ${mobileNo}</a>
    <br></br>
    <a className="font-semibold" href=${`mailto:${email}`}>Email: ${email}</a>
    <br><</br>
    <p>${products}</p>`,
  };

  try {
    const result = await sgMail.send(msg);
    console.log("succesful email sent", result);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.log("error in sending email");
    console.log(error);
    res.status(500).json({ error });
  }
};
