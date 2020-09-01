import * as mailgunLoader from "mailgun-js";
import config from "../config";

const mailgun = mailgunLoader({
  apiKey: config.keys.mailgun,
  domain: config.keys.mailgunDomain,
});

export const sendEmail = (to: string, from: string, subject: string, body: string )  => {
   const mailgunObj = {
       to,
       from,
       subject,
       text: body
   }
   return mailgun.messages().send(mailgunObj);
}; 

