import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import dotenv from 'dotenv';
dotenv.config();

import transporter from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {

	try {
		const mailOptions = {
			from : process.env.SENDER_EMAIL,
			to: email,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		};
		const response = await transporter.sendMail(mailOptions);
		
		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {

	try {
		const mailOptions = {
			from : process.env.SENDER_EMAIL,
			to: email,
			subject: "Welcome  email",
			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
		};
		await transporter.sendMail(mailOptions);

		console.log("Welcome email sent successfully");
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {

	try
	{
		const mailOptions = {
			from: process.env.SENDER_EMAIL,
			to: email,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace( "{resetURL}", resetURL ),
			category: "Password Reset",
		};
		await transporter.sendMail( mailOptions );
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	try {
		const mailOptions = {
			from: process.env.SENDER_EMAIL,
			to: email,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		};
		const response = await transporter.sendMail( mailOptions );

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
