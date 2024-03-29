require('dotenv').config()
const config = {
  app: {
    host: process.env.HOST,
    port: process.env.PORT
  },
  nodemailer: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD
  },
  rabbitMq: {
    server: process.env.RABBITMQ_SERVER
  }
}

module.exports = config
