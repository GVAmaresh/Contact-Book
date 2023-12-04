const userData = require("../heliverse_mock_data.json");
const User = require("../Model/userModel");
exports.findAllUser = async (req, res) => {
  try {
    const { max } = req.params;
    if (max < 20) {
      return res.status(400).json({
        status: "error",
        message: "Params max should be greater than or equal to 20",
      });
    }
    const skipCount = max - 20;
    const limitCount = 20;
    const users = await User.find()
      .maxTimeMS(30000)
      .skip(skipCount)
      .limit(limitCount);

    res.status(200).json({
      status: "success",
      count: users.count,
      data: users,
    });
  } catch (error) {
    console.error("Error finding users:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;

    const user = await User.create({
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });

    if (!user) {
      return res.status(404).json({
        status: "Fail",
        message: "User not created",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.createUserFromJson = async (req, res) => {
  try {
    const user = await User.create(userData);
    if (!user) {
      return res.status(400).json({
        status: "Failed",
        message: "Couldn't create user",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(500).json({
      status: "Error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteAllUser = async (req, res) => {
  try {
    const user = await User.deleteMany().maxTimeMS(30000);
    if (!user) {
      return res.status(200).json({
        status: "success",
        message: "All user already deleted",
      });
    }
    res.status(200).json({
      status: "success",
      message: "All user are deleted",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error updating user:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error updating user:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete(_id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User Already Deleted",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error updating user:", error);

    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
