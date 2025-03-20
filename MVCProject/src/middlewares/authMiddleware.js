export const isAuthenticated = (req, res, next) => {
    const { isLoggedIn } = req.query;
  
    if (isLoggedIn === "true") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized access" });
    }
  };




     