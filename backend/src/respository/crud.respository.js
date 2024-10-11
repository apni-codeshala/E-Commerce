class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repo in creation");
      throw new Error(error);
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repo in deletion using id");
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repo in getting using id");
      throw new Error(error);
    }
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      console.log("Something went wrong in crud repo in get all");
      throw error;
    }
  }

  async update(id, data) {
    const response = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return response;
  }
  catch(error) {
    console.log("Something went wrong in crud repo in updating using id");
    throw error;
  }
}

export default CrudRepository;
