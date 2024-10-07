import SellerService from "../services/seller.service.js";

const sellerService = new SellerService();

export const becomeSeller = async (req, res) => {
  try {
    const cleanedCity = req.body["city "]?.trim() || req.body.city?.trim();

    const data = {
      name: req.body.name.trim(),
      user_id: req.user,
      addressLine1: req.body.addressLine1.trim(),
      addressLine2: req.body.addressLine2.trim(),
      state: req.body.state.trim(),
      city: cleanedCity,
      contactNo: req.body.contactNo.trim(),
      aadharNumber: req.body.aadharNumber.trim(),
      panNumber: req.body.panNumber.trim(),
    };

    const response = await sellerService.requestToBecomeSeller(data);
    return res.status(200).json({
      success: true,
      message: "Request sent to admin",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to send request to admin, try again",
      data: {},
      err: error,
    });
  }
};

export const veriySeller = async (req, res) => {
  try {
    const sellerId = req.query.sellerId;
    const response = await sellerService.adminApprovingTheSeller(sellerId);
    return res.status(200).json({
      success: true,
      message: "Seller is successfully verified",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error in controller layer in verifying seller");
    return res.status(500).json({
      success: false,
      message: "Not able to approve the request, try again",
      data: {},
      err: error,
    });
  }
};

export const getAllApprovedSellers = async (req, res) => {
  try {
    const response = await sellerService.getAllTheApprovedSeller();
    return res.status(200).json({
      success: true,
      message: "Succcessfully get all the approved sellers",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error in controller layer in getting approved seller");
    return res.status(500).json({
      success: false,
      message: "Not able to get apprved sellers",
      data: {},
      err: error,
    });
  }
};

export const getAllUnapprovedSellers = async (req, res) => {
  try {
    const response = await sellerService.sendUnverifiedSellerListToAdmin();
    return res.status(200).json({
      success: true,
      message: "Succcessfully get all the unapproved sellers",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error in controller layer in getting unapproved seller");
    return res.status(500).json({
      success: false,
      message: "Not able to get unapproved sellers",
      data: {},
      err: error,
    });
  }
};

export const getSellerInfo = async (req, res) => {
  try {
    const response = await sellerService.getSellerInfo(req.query.id);
    return res.status(200).json({
      success: true,
      message: "Succcessfully get user info",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error in controller layer in getting unapproved seller");
    return res.status(500).json({
      success: false,
      message: "Not able to get user info",
      data: {},
      err: error,
    });
  }
};
