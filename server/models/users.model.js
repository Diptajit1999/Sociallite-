const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide fullName."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide email"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    role: {
        type: String,
        // required:true,
        enum: ["CREATOR", "VIEW_ALL"],
        default:"VIEW_ALL",
      },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

