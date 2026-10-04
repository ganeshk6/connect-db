const express = require('express');
const sequelize = require('./utils/db_connection');
const userRoutes = require('./routers/userRouter');
const busRoutes = require('./routers/busRouter');
require('./models')
const app = express();
const PORT = 4000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');  
})
app.use('/users', userRoutes);
app.use('/buses', busRoutes);

sequelize.sync({force: false})
.then(()=>{
    console.log("Database synchronized");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log(err)
})