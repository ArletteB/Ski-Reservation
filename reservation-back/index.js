const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoConnect = require('./config/mongo.connect');
const postRouter = require('./src/routers/post.router');
const commentRouter = require('./src/routers/comment.router');
const bookingRouter = require('./src/routers/booking.router');
const shopRouter = require('./src/routers/shop.router');
// const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 3000;

mongoConnect();


// app.use(cors());
app.use(express.json());

app.use(postRouter);
app.use(commentRouter);
app.use(bookingRouter);
app.use(shopRouter);




app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(PORT, () =>{
    console.log(`Listening at http://localhost: ${PORT}`)
});