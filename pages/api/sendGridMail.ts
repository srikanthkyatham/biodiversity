/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next';
import Config from '../../app.json'

sgMail.setApiKey('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')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, mobileNo, products, name, others } = req.body
  const msg = {
    to: Config.email,
    from: email,
    subject: products,
    name,
    text: others,
    html: `<a className="font-semibold" href=${`tel:${mobileNo}`}>Phone: ${mobileNo}</a>`
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}