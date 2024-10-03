const isAdmin = (req) => {
  if (req.role == "admin") {
    return true;
  } else {
    return false;
  }
};

const isSeller = (req) => {
  if (req.role == "seller") {
    return true;
  } else {
    return false;
  }
};

// Always use this middlewares after authentication the user
const canAddProduct = (req, res, next) => {
  const isUserAdmin = isAdmin(req);
  const isUserSeller = isSeller(req);
  if (isUserAdmin || isUserSeller) {
    next();
  } else {
    return res.json({
      message: "User unauthorized",
      success: true,
      code: 401,
    });
  }
};

export default canAddProduct;
