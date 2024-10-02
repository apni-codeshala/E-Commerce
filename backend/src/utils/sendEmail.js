import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail(email, otp) {
  const { data, error } = await resend.emails.send({
    from: "AbhiKharido <abhikharido@resend.dev>",
    to: [email],
    subject: `${otp} is your verification otp on AbhiKharido`,
    html: `<strong>Please verify your email address by submitting this OTP: ${otp} in AbhiKharido. This OTP only valid till 10 minutes</strong>. If not send by you than leave it.`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

export default sendMail;
