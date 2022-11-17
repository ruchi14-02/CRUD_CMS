
const { StatusCodes } = require('http-status-code')



const authController = {
    register: async (req, res) => {
        try {
            res.json({ msg: "register user success" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }

    },
    login: async (req, res) => {
        try {
            res.json({ msg: "login user success" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.json({ msg: "logout user success" })

        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    refreshToken: async (req, res) => {
        try {
            res.json({ msg: "refreshtoken" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    resetPassword: async (req, res) => {
        try {
            res.json({ msg: "reset password" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }

}

module.exports = authController