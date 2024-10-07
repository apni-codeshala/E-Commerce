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
      message: "Request send to admin",
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
