const jwt = require("express-jwt"); // Validate JWT and set req.user
const jwksRsa = require("jwks-rsa"); // Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint

module.exports.checkScope = require("express-jwt-authz"); // Validate JWT scopes

// use scopes when interacting with third parties
// Use roles for handling your app's permissions.
module.exports.checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  //audience: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
  aud: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});

module.exports.checkRole = role => {
  return (req, res, next) => {
    const assignedRoles = req.user[`${process.env.REACT_APP_URL}/roles`];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    } else {
      return res.status(401).send("Insufficient role");
    }
  };
};

module.exports.getUserID = req => {
  if (req.user) {
    return req.user.sub;
  }
  return "";
};
