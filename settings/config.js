import { Colors } from "discord.js";

const settings = {
  TOKEN: process.env.TOKEN || "token",
  Owners: ["981501891030700082", "814379029275738142"],
  Slash: {
    Global: true,
    GuildID: process.env.GuildID || "Guild_Id",
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },
  emoji: {
    success: "✅",
    error: "❌",
  },
};

export default settings;
