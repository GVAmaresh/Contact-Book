const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  teamMembers: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
      },
      name: { type: String, required: true },
      avatar: { type: String, required: true },
    },
  ],
});
module.exports = mongoose.model("Team", teamSchema);
