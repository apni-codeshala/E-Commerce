export const isAdmin = (req, res, next) => {
  if (req.role == "admin") {
    next();
  } else {
    return res.json({
      message: "Unauthorized Access",
      success: true,
      code: 401,
    });
  }
};

export const isSeller = (req, res, next) => {
  if (req.role == "seller") {
    next();
  } else {
    return res.json({
      message: "Unauthorized Access",
      success: true,
      code: 401,
    });
  }
};

// Always use this middlewares after authentication the user
export const canAddProduct = (req, res, next) => {
  if (req.role == "seller" || req.role == "admin") {
    next();
  } else {
    return res.json({
      message: "User unauthorized",
      success: true,
      code: 401,
    });
  }
};
