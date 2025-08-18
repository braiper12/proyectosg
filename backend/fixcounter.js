// fixCounter.js
import mongoose from "mongoose";
import Counter from "./src/models/counter.js"; // 

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tu_db";

const fixCounter = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const result = await Counter.updateOne(
      { _id: "empresaId" },
      { $set: { seq: 100000 } }
    );

    console.log("✅ Contador actualizado:", result);
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error corrigiendo contador:", err);
    mongoose.disconnect();
  }
};

fixCounter();
