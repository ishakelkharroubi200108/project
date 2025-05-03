import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport( {
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // Explicitly set for port 587
    requireTLS: true, // Brevo requires TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
} );

export default transporter;