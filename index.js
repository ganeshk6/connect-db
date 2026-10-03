const express = require('express');
const db = require('./utils/db_connection');
const userRoutes = require('./routers/userRouter');
const busRoutes = require('./routers/busRouter');
const app = express();
const PORT = 4000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');  
})
app.use('/api/users', userRoutes);
app.use('/api/buses', busRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});