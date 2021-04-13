import nodemailer from "nodemailer"

export default async (req, res) => {
    const {
        name,
        from,
        message,
        topic,
    } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    try {
        const form = await transporter.sendMail({
            from: `${name} ${from}`,
            to: "strona@lexell.com.pl",
            subject: `Zapytanie ze strony Lexell.pl`,
            html: `${message} <br/>---<br/> Wiadomość od: ${from} <br/> Zapytanie dotyczące: ${topic}`,
        })

    } catch (err) {
        console.log(err)
    }

    res.status(200).json(req.body)
}