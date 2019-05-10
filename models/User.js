const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    hidden: Boolean,
    email: {
      type: String,
      match: /^.+@.+\..+$/,
      required: true,
      unique: true
    },

    password: { type: String, required: true },
    quote: { type: String, required: true },
    administrator: Boolean,
    teamleader: { type: Boolean, required: true },
    employee: { type: Boolean, required: true },
    role: {
      type: String,
      enum: [
        "Développeur",
        "Data Scientist",
        "UX/UI",
        "Projet",
        "Finance",
        "Insigths & Mesure",
        "Autre"
      ],
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
