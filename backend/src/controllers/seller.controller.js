import SellerService from "../services/seller.service.js";

const sellerService = new SellerService();

export const becomeSeller = async (req, res) => {
  try {
    console.log("Request come in controller layer", req.body);
    const data = {
      name: request.body.name,
      uesr_id: req.user,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      state: req.body.state,
      city: req.body.city,
      contactNo: req.body.number,
      aadharNumber: request.body.aadharNumber,
      panNumber: req.body.panNumber,
    };
    console.log(data);
    const response = await sellerService.requestToBecomeSeller(data);
    console.log("After becomming a selller");
    return res.status(200).json({
      success: true,
      message: "Request send to admin",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error in controller layer in becomingaseller");
    return res.status(500).json({
      success: false,
      message: "Not able to request to admin, try again",
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
