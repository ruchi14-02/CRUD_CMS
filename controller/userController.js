
const { StatusCodes } = require('http-status-code')



const authController = {
    getAll: async (req, res) => {
        try {
            res.json({ msg: "get all user success" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }

    },
    getCurrentUser: async (req, res) => {
        try {
            res.json({ msg: " get current  user success" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            res.json({ msg: "updated user success" })

        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    deleteUser: async (req, res) => {
        try {
            res.json({ msg: "deleted user" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    },
    changeRole: async (req, res) => {
        try {
            res.json({ msg: "changed user roles" })
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }

}

module.exports = userController