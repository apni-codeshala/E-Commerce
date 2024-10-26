import SellerService from "../services/seller.service.js";
const sellerSrvice = new SellerService();

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

export const isSeller = async (req, res, next) => {
  if (req.role == "seller") {
    const result = await sellerSrvice.getSellerId(req.user);
    req.sellerId = result;
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
