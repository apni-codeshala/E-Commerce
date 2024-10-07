import Seller from "../models/seller.model.js";
import CrudRepository from "./crud.respository.js";

class SellerRepository extends CrudRepository {
  constructor() {
    super(Seller);
  }

  async getByEmail(email) {
    try {
      const seller = await Seller.findOne({ email });
      return seller;
    } catch (error) {
      console.log(
        "Semething went wrong in repository layer in finding the seller from email",
      );
      throw error;
    }
  }

  async getByData(data) {
    try {
      const seller = await Seller.find(data);
      return seller;
    } catch (error) {
      console.log("Something went wrong in getting the seller by data");
      throw error;
    }
  }

  async unapprovedSellers() {
    try {
      const sellers = await Seller.find({
        approved: false,
      });
      return sellers;
    } catch (error) {
      console.log("Something went wrong in getting the unverified sellers");
      throw error;
    }
  }
}

export default SellerRepository;
