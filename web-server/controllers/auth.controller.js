const { Privilege, User } = require("../models");
const randomBytes = require("randombytes");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const register = async (req, res, next) => {
  console.log("je suis dans register de users");
  console.log("body", req.body);
  const { password, ...rest } = req.body;
  const salt = randomBytes(32);

  try {
    console.log("p", password);
    const hashedPassword = await argon2.hash(password, { salt });
    console.log("h", hashedPassword);
    const user = await User.create(
      {
        ...rest,
        password: hashedPassword,
      },
      { include: [Privilege] }
    );
    res.status(200).json({ id: user.id, ...rest });
  } catch (error) {
    res.status(500).json(error.toString());
  }
  // recuperer le body
  // recuper le email et password
  // hasher/crypter le password
  // Creer un nouvel user avec le pwd crypté + email
  // return le user sans la clé password
};

const authenticate = async (req, res, next) => {
  // login
  // recupérer le email + password
  console.log("das login");

  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      include: Privilege,
      where: { email },
    });
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordCorrect = await argon2.verify(user.password, password);
    if (!isPasswordCorrect) {
      throw new Error("Password incorrect");
    }

    const payload = { user };
    const token = jwt.sign(payload, secret, { expiresIn: "6h" });

    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json(error.toString());
  }
  // chercher le user qui match avec le mail
  // decrypté le mdp associé
  // le comparer avec le mdp soumis
  // if true , on renvoier un token, signer avec les
  // infos user + ses privileges
};

const isAuthenticated = async (req, res, next) => {
  // recupérer le token du header tu req entrante
  // verifié le token
  // si correcte, on va décoder les infos user + privileges
  // append user+privilege a la req en cours

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (!token) {
      throw new Error("Missing Token!!!!");
    }
    let { user } = await jwt.verify(token, secret);
    req.user = { ...user };
    return next();
  } catch (error) {
    res.status(401).json(error.toString());
  }
};

module.exports = { register, authenticate, isAuthenticated };
