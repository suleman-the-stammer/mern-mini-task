
import userModel from '../models/user.models.js'
import bcrypt from 'bcrypt'


const getUserController = async function (req, res) {
    try {
        let allUser = await userModel.find({})
        return res.status(200).send({
            userCount: allUser.length,
            success: true,
            message: "User Mill gaiii Mia ",
            allUser
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Ustad user to nhi mil rhai"
        })
    }
}
const registerController = async function (req, res) {
    const { username, email, password, blog } = req.body;
    try {

        if (!username || !email || !password ) {
            res.status(400).send({
                message: 'All Fields are Required to Fill'
            })
        }
        let existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).send({
                message: "User Already Exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let user = new userModel({ username, email, password: hashedPassword })

        await user.save();
        return res.status(201).send({
            success: true,
            message: "New User is Created ",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Error in Register Callback Controller",
            success: false,
            error
        })
    }


}
const loginController = async function (req, res) {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({
                message: "Provide Email and Password "
            })
        }
        // Check User Exists or NOt
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).send({
                message: "User Not Exists My Dear Friend",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid Email or Password ",
                success: false
            })
        }
        return res.status(200).send({
            success: true,
            message: "Login Is SuccessFully  ",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in Login controller",
            success: false,
            error
        })
    }
}

export { getUserController, registerController, loginController }