import { connect } from '../../../dbConfig/dbConfig';
import UserFeedBack from '../../../models/userFeedBackModel';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

connect();


export async function POST(request: NextRequest) {

    const user = process.env.EMAIL_USER;

    try {

        const reqBody = await request.json();
        const {name, email, subject, message } = reqBody;

        const newUserFeedBack = new UserFeedBack({
            name,
            email,
            subject,
            message,
        });

        await newUserFeedBack.save();
        

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: user,
                to: user,
                subject: 'New user feeedback',
                html: `
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Subject: ${subject}</p>
                    <p>Message: ${message}</p>
                `
            });

            await transporter.sendMail({
                from: user,
                to: email,
                replyTo: email,
                subject: 'Feedback Recieved',
                html: `<p>Thank you so much, ${name}. Your message message has been recieved. 
                We will contact you very soon.</p>`
            });

        } catch (error) {
            return NextResponse.json({error: error});
        }

    } catch (error) {
        return NextResponse.json({
            error: error.message,
        }, {status: 500})
    }
}