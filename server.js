/** Default dependencies
 * npm i express express-validator bcryptjs config gravtar jsonwebtoken mongoose request axios
 * express-validator - when making api request it will check and alert if a field that shouldn't be there.
 * bcryptjs - encrypting password
 * config - to have global configs
 * gravtar - profile avatar, when a user sign up there can signup with a email that is associate with an avatar
 * jsonwebtoken - using jwt to pass along web tokens for validation
 * mongoose - sit on top of the database so we can interact with
 * request - reason to have this is because for github repositories we want our profiles to have github repos listed on them
 * so we are going to make that request backend so we can hide our api keys so we can just return their api repo
 * axios - Promise based HTTP client for the browser and node.j
 */
/** Dependencies for development
 * npm i -D nodemon concurrently
 * */
/**
 * had to perform npm uninstall -g create-react-app and reintall create-react-app as it was outdated
 * npm install -g create-react-app
 */
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware (to get data in req body)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
