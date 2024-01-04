const jwt = require("jsonwebtoken");

sec = 'helloworld'

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");
    
    if (!token) {
        res.status(400).send({ error: "Please authenticate using valid token" });
    }

    try {
        const data = jwt.verify(token,sec);
        req.user = data.user;
        next();
  }
    catch (error) {
        console.log(error)
        res.status(401).send('Some error occured while fetching the user')
  }
};

module.exports = fetchuser;
