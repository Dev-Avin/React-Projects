const express = require('express');

const dotenv =require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');


const cors = require('cors');

const curl = process.env.MY_URL;
console.log(curl)

const app = express();
app.use(cors(
   { origin : curl,
    credentials : true}
) );
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const jwtSecret  = process.env.JWT_SECRET;
console.log(jwtSecret);

const User = require('./models/User');





app.get('/test', (req , res) => {
    res.json('test ok');
})

app.post('/register', async(req , res) => {
    console.log('Register called')
    const {username,  password } = req.body;
    const createdUser = await User.create({username, password});
    await jwt.sign({userID: createdUser._id}, jwtSecret, {},
        (err , token) => {
            if(err) throw err;
            res.cookie('token', token).status(201).json({
                id: createdUser._id,
            });

        });
    
    console.log(`${username} and ${password}`);
});

app.listen(4000);



//userName : merncha  t
//password : awFYyvjxM3kuaB4d

/*{
    mongodb+srv://mernchat:<password>@chatapp.0bsvpuq.mongodb.net/?retryWrites=true&w=majority
}*/




// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();



// app.use(cors({
//     credentials: true,
//     origin: CLIENT_URL,
// }));
// app.use(express.json())

// app.post('/register', (req, res) => {
//     // Your registration logic goes here
//     res.json({ message: 'Registration successful' });
//     console.log(`${req.body.username} and ${req.body.password}`);
// });

// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });
