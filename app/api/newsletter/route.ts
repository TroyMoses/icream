import { connect } from '../../../dbConfig/dbConfig';
import NewsLetter from '../../../models/newsLetterModel';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

connect();


export async function POST(request: NextRequest) {

    const user = process.env.EMAIL_USER;

    try {

        const reqBody = await request.json();
        const { email } = reqBody;

        const newsLetter = new NewsLetter({
            email,
        });

        await newsLetter.save();        

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
                subject: 'New Email has registered for updates',
                html: `
                    <p>Email: ${email}</p>
                `
            });

            await transporter.sendMail({
                from: 'mugabimoses07@gmail.com',
                to: email,
                replyTo: email,
                subject: 'Subscribed Successfully',
                html: `<p>Thank you so much for subscribing for our newsletter. 
                You will be recieving all updates from usva swamp volleyball association.</p>`
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