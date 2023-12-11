import express from "express"
import UserRouter from "./router/user.router.js";
import customerRouter from "./router/CustomerData.router.js";
import transferRouter from "./router/TransferMoney.router.js";
import nodemailer from "nodemailer";

const port = 3001;
const app = express();
import cors from "cors";
app.use(cors())
app.use(express.json());

app.use(UserRouter)
app.use(customerRouter)
app.use(transferRouter)

app.post('/sendmail', (req, res) => {
    const nodemailer = require('nodemailer');
    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rbhavsar067@gmail.com',
            pass: 'yprpvmvdvxleiucd',
        },
    });
    // Email content
    const mailOptions = {
        from: 'rbhavsar067@gmail.com',
        to: `${req.body.mail}`,
        subject: 'Payment Transfer done',
        html:`       <div style="border:1px solid gray;margin-bottom:5px;padding:5px">
            <h2>Your payment was successfully processed</h2>
            <div style="display:flex;width:100%;">
                <span style="font-weight:600;">From:&nbsp;<span class="mp_address_group"><a href="mailto:billing@typeform.com" class="mp_address_email">billing@typeform.com</a></span></span>
                <span style="flex: 1 1 auto;"></span>
                <span style="color:silver;font-weight:600">1/28/2021, 6:19:36 PM</span>
            </div>
            <div style="font-size:12px;">
                To:&nbsp;<span class="mp_address_group"><a href="mailto:dan@tldrnewsletter.com" class="mp_address_email">dan@tldrnewsletter.com</a></span>
            </div>
        </div><p><!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office">
​
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="#"
rel="stylesheet" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;" />
<title>Typeform</title>
<style type="text/css">
html {
width: 100%;
}
​
body {
width: 100% !important;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
margin: 0 !important;
padding: 0 !important;
}
​
.ExternalClass * {
line-height: 100%
}
​
div[style*="margin: 16px 0"] {
margin: 0 !important;
}
​
table td {
border-collapse: collapse;
}
​
table {
border-collapse: collapse;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt;
}
​
a {
color: #000000;
text-decoration: none !important;
}
​
@media only screen and (max-width: 640px) {
​
/* General */
img.banner {
    width: 100% !important;
    height: auto !important
}
​
.banner2 {
    width: 85% !important;
    height: auto !important
}
​
.banner3 {
    width: 60% !important;
    height: auto !important
}
​
.devicewidth {
    width: 100% !important;
    text-align: center !important;
    min-width: 130px !important;
}
​
.devicewidth90 {
    width: 90% !important;
    text-align: center !important;
    min-width: 130px !important;
}
​
/* Responsive Paddings */
.padding0 {
    padding: 0 !important
}
​
.paddingtop0 {
    padding-top: 0px !important;
}
​
.paddingl0 {
    padding-left: 0 !important
}
​
.paddingr0 {
    padding-right: 0 !important
}
​
.paddingtop {
    padding-top: 40px !important;
    padding-right: 0 !important
}
​
.paddingtop20 {
    padding-top: 20px !important;
}
​
.paddingtop30 {
    padding-top: 30px !important;
}
​
.paddingtop25 {
    padding-top: 25px !important;
}
​
.paddingtop15 {
    padding-top: 15px !important;
}
​
.paddingtop10 {
    padding-top: 10px !important;
}
​
.paddingtbot10 {
    padding-bottom: 10px !important;
}
​
.paddingtbot20 {
    padding-bottom: 20px !important;
}
​
.paddingtbot30 {
    padding-bottom: 30px !important;
}
​
.paddingr {
    padding-right: 5px !important
}
​
.paddingl {
    padding-left: 5px !important
}
​
.paddingl10 {
    padding-left: 10px !important
}
​
/* Font size */
.mobtext60 {
    font-size: 60px !important;
    line-height: 68px !important
}
​
.mobtext28 {
    font-size: 28px !important;
    line-height: 38px !important
}
​
.mobtext20 {
    font-size: 20px !important;
    line-height: 30px !important
}
​
.mobtext18 {
    font-size: 18px !important;
    line-height: 28px !important
}
}
​
/*=Darkmode Outlook*/
[data-ogsc] a {
color: #ffffff !important;
}
​
@media only screen and (max-width: 360px) {}
</style>
​
<!-- Coding for DPI Scaling in Outlook 2007-2016 -->
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
​
​
</head>
​
<body>
​
<!--Outlook Fallback Hack-->
<!--[if mso]>
<style type="text/css">
body, table, td {font-family: Arial, sans-serif !important;}
</style>
<![endif]-->
<!--Outlook fallback hack font-->
<!--[if mso]>
<style type="text/css">
body, table, td {font-family: Arial, sans-serif !important;}
</style>
<![endif]-->
​
<!--Preheader Starts-->
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#fcfaf8">
<tr>
<td align="center">
    <table width="640" cellpadding="0" cellspacing="0" class="devicewidth" bgcolor="#fcfaf8" align="center"
        style="min-width: 640px;">
        <tr>
            <td style="padding-top: 10px;">
                <table width="500" align="center" cellpadding="0" cellspacing="0" class="devicewidth">
                    <tr>
                        <td
                            style="font-family: Arial, sans-serif; font-size:10px;color:#737373;text-align: center; padding-top: 10px; padding-bottom: 20px">
                            <!--Preheader Text-->
                            <a style="color:#737373;text-decoration:underline!important;"
                                href="{{viewInBrowserUrl}}" rilt="mirror" target="_blank">
                                View in browser
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</td>
</tr>
</table>
<!--Preheader Ends-->
​
<!--Logo Starts-->
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#fcfaf8">
<tr>
<td align="center">
    <table width="640" cellpadding="0" cellspacing="0" class="devicewidth" bgcolor="#7DC5DA" align="center">
        <tr>
            <td style="font-size:0px;line-height: 0px;margin: 0;letter-spacing: 0; padding-top: 60px; padding-bottom: 60px"
                align="center">
                <a href="#" target="_blank">
                    <img style="border:0"
                        src="https://typeform-marketing-images.s3.amazonaws.com/Typeform_Logo_new.png"
                        width="137" height="29" alt="" />
                </a>
            </td>
        </tr>
    </table>
</td>
</tr>
</table>
<!--Logo Ends-->
​
<!--H1 Headline Text Starts-->
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#fcfaf8">
<tr>
<td align="center">
    <table width="640" cellpadding="0" cellspacing="0" class="devicewidth" bgcolor="#7DC5DA" align="center">
        <tr>
            <td align="center">
                <table width="420" cellpadding="0" cellspacing="0" class="devicewidth90" bgcolor="#7DC5DA"
                    align="center">
                    <tr>
                        <td style="color: #262627;font-family: Arial, sans-serif;font-size: 70px; font-weight: bold; text-align: center;line-height: 76px;padding-bottom: 60px"
                            class="mobtext60">See your latest invoice
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</td>
</tr>
</table>
<!--H1 Headline Text Ends-->
​
<!--H4 Regular Body Text Starts-->
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#fcfaf8">
<tr>
<td align="center">
    <table width="640" cellpadding="0" cellspacing="0" class="devicewidth" bgcolor="#ffffff" align="center">
        <tr>
            <td align="center">
                <table width="400" cellpadding="0" cellspacing="0" class="devicewidth90" bgcolor="#ffffff"
                    align="center">
                    <tr>
                        <td style="color: #262627;font-family: Arial, sans-serif; font-size: 20px; text-align: left;line-height: 26px;padding-top: 75px;"
                            class="mobtext18">Hi there,<br /><br />To view or print invoice 02104027
                            click the button below.<br /><br />For just the highlights, look
                            here:<br /><br />- Your card was charged: $35.00<br />- The next payment
                            is on: February 28, 2021<br />- Your Typeform plan is:
                            Essentials Plan monthly<br /><br />Remember to keep this email for your ...`,
    };
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error.message);
        } else {
            console.log('Email sent:', info.response);
        }
    });


})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
