import * as dotenv from 'dotenv';

dotenv.config();

export default { 
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD
        
    },
    auth: {
        secret: process.env.JWT_SECRET
    },
    keys:{
        mailgun: process.env.MAILGUN_KEY,
        mailgunDomain: process.env.MAILGUN_DOMAIN, 
        stripe: process.env.STRIPE_KEY
    }
}

