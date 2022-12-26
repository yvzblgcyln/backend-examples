import { db } from "../connect.js";

export const register = (req, res) => {
  const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
  console.log(req.body);
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    console.log(data);
    return res.json(data);
  });
};
export const login = (req, res) => {};
