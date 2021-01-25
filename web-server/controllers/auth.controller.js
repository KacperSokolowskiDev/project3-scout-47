const { Privilege, User } = require("../models");
const randomBytes = require("randombytes");
const argon2 = require("argon2");

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
};

module.exports = { register, authenticate, isAuthenticated };
