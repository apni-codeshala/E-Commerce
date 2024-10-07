import SellerRepository from "../respository/seller.repository.js";
import UserRepository from "../respository/user.repository.js";

class SellerService {
  constructor() {
    this.sellerRepository = new SellerRepository();
    this.userRepository = new UserRepository();
  }

  // User first request to become a seller, the data will be stored in database but this user will unapproved as a seller so they doesn't have any acess that seller have
  async requestToBecomeSeller(data) {
    try {
      console.log(data);
      const seller = await this.sellerRepository.create(data);
      return {
        name: seller.name,
        addressLine1: seller.addressLine1,
        addressLine2: seller.addressLine2,
        state: seller.state,
        city: seller.city,
        contactNo: seller.contactNo,
      };
    } catch (error) {
      console.log("Error creating seller", error);
      throw new Error(error);
    }
  }

  async sendUnverifiedSellerListToAdmin() {
    try {
      const sellers = this.sellerRepository.unapprovedSellers();
      return sellers;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in getting the unapproved sellers request",
        error,
      );
      throw new Error(error);
    }
  }

  async adminApprovingTheSeller(sellerId) {
    try {
      const seller = await this.sellerRepository.getById(sellerId);
      console.log(seller, seller.user_id);
      const updatedUser = await this.userRepository.update(seller.user_id, {
        role: "seller",
      });
      if (!updatedUser) {
        throw new Error("Error in updating the user role");
      }
      seller.approved = true;
      await seller.save();
      return seller;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in approving the seller",
        error,
      );
      throw new Error(error);
    }
  }

  async getAllTheApprovedSeller() {
    try {
      const sellers = this.sellerRepository.getByData({
        approved: true,
      });
      return sellers;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in getting the approved seller",
        error,
      );
      throw new Error(error);
    }
  }

  async getSellerInfo(id) {
    try {
      const sellers = this.sellerRepository.getById(id);
      return sellers;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in getting the seller info",
        error,
      );
      throw new Error(error);
    }
  }
}

export default SellerService;
