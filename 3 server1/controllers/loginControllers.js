import loginService from "../services/loginService.js";

const checkEmailAndPass = async(req, res) => {
  try {
    const userAndPass = req.body;
    console.log(userAndPass);
    const user = await loginService.checkEmailAndPass(userAndPass);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(404).json({ error: "Server error" });
  }
};

export default {
  checkEmailAndPass,
};
