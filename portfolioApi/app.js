require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors    = require('cors');
const sendGRid = require('@sendgrid/mail');
const app = express();



app.use(bodyParser.json());


app.use(cors());

app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});



app.post('/api/email', (req, res, next)=>{
    
    sendGRid.setApiKey(process.env.SENDGRID_API_KEY);

  
    

    const msg = {

        to: 'dpds@orange.fr',
        from: req.body.email,
        subject: 'Contact portfolio',
        text: req.body.message
    };

     sendGRid.send(msg)
        .then(result =>{

            res.status(200).json({
                success: true
            });

        })
        .catch(err =>{
            console.log('error: ', err);

            res.status(401).json({
                success: false  
            });
            
        })
});


const port = process.env.PORT || 3030;
app.listen(port, '0.0.0.0');
