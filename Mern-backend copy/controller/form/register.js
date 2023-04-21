const { User } = require("../../db/config")
const jwtKey = 'token';



const register =  async (req, resp) => {

    try {
        const { name, email, password } = req.body;
        const emailCheck = await User.findOne({ where: { email } })
        if (emailCheck) {
            return resp.send("email already exist")
        }
        Jwt.sign({ result }, jwtKey, (err, token) => {
            if (err) {
                resp.send({ result: "something went wrong , please try after sometimes" })
            }
            resp.send({ result, auth: token })
        })
    } catch (err) {
        resp.send("server error")
    }
}
module.exports = { register }