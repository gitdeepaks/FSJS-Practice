const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello there is is my first backend server!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})


export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //validation

    if (!email || !password) {
        throw new CustomError('Please enter a valid email', 400);

    }

}
)

const login = asyncHandler(async (req, res) => {

})


const logout = asyncHandler(async (req, res) => {
    res.cookie("token", null, {
        expiries: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged Out'
    })
});