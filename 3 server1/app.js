import express from "express";
import usersRoute from './routes/usersRoute.js'
import indexRoute from './routes/indexRoute.js'
import loginRoute from './routes/loginRoute.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", usersRoute)
app.use("/", indexRoute)
app.use("/authenticate", loginRoute)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
