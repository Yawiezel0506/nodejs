import express from "express";
// import { v4 } from "uuid";
// import { hash, compare } from "bcrypt";
// import fs from "fs";
// import joi from "joi";
import usersRoute from './routes/usersRoute.js'

const app = express();
const port = 3000;
const saltRounds = 10; // Number of salt rounds for hashing

// const saveToFile = (data) => {
//   const updatedDataJSON = JSON.stringify(data);
//   fs.writeFile("./db/users.json", updatedDataJSON, "utf8", (err) => {
//     if (err) {
//       console.error("Error writing the file:", err);
//       return;
//     }
//     console.log("File updated successfully.");
//   });
// };

// Define joi schema for validation
// const userSchema = joi.object({
//   name: joi.string().required(),
//   email: joi.string().email().required(), // Validate email format
//   password: joi.string().min(8).required(), // Validate minimum length
// });

app.use(express.json());
app.use("/users", usersRoute)

// let users;

// fs.readFile("./db/users.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }

//   try {
//     users = JSON.parse(data);
//   } catch (parseError) {
//     console.error("Error parsing JSON:", parseError);
//   }
// });

// 👉

// app.post("/users", (req, res) => {
//   let newUser = req.body;
//   const maxId = users.reduce((max, cur)=> {
//     return max < cur.id? cur.id: max;
//   },0)
//   newUser = {
//     ...newUser,
//     "id" : String(Number(maxId)+1),
//   }
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// 👉

// app.post("/users", async (req, res) => {
//   try {
//     const { error } = userSchema.validate(req.body);
//     if (error) {
//       return res
//         .status(400)
//         .json({ message: "Validation error", error: error.details });
//     }
//     let { name, email, password } = req.body;
//     const hashedPassword = await hash(password, saltRounds);
//     const newUser = {
//       name,
//       email,
//       password: hashedPassword,
//       id: v4(),
//     };

//     users.push(newUser);
//     saveToFile(users);
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find((user) => user.id == id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: "User not found" });
//   }
// });

// app.put("/users/:id", (req, res) => {
//   try {
//     const { error } = userSchema.validate(req.body);
//     if (error) {
//       return res
//         .status(400)
//         .json({ message: "Validation error", error: error.details });
//     }
//     const id = parseInt(req.params.id);
//     const updatedUser = req.body;

//     const indexToChange = users.findIndex((user) => user.id == id);
//     if (indexToChange === -1) return res.status(404).send("user not found");
//     users[indexToChange] = { ...users[indexToChange], ...updatedUser };
//     saveToFile(users);
//     res.json(users[indexToChange]);
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.delete("/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   if (id >= 0 && id < users.length) {
//     const index = users.findIndex((user) => user.id == id);
//     const deletedUser = users[index];
//     users.splice(index, 1);
//     saveToFile(users);
//     res.json(deletedUser);
//   } else {
//     res.status(404).json({ error: "User not found" });
//   }
// });

app.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const passwordMatch = await compare(password, user.password);

  if (passwordMatch) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid password" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello to YSW project!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
