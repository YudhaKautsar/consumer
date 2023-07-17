const nodemailer = require('nodemailer')
const config = require('../src/utils/config')

class MailSender {
  constructor () {
    this._transporter = nodemailer.createTransport({
      host: config.nodemailer.host,
      port: config.nodemailer.port,
      auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.password
      }
    })
  }

  sendEmail (targetEmail, content) {
    const message = {
      from: 'OpenMusic App',
      to: targetEmail,
      subject: 'Ekspor Playlist',
      text: 'Terlampir dari ekspor playlist',
      attachements: [
        {
          filename: 'playlist.json',
          content
        }
      ]
    }

    return this._transporter.sendMail(message)
  }
}

module.exports = MailSender
