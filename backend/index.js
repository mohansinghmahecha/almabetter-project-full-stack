const mongoose = require("mongoose");
// Connecting to MongoDB using the provided connection string and options
mongoose
  .connect(
    "mongodb+srv://mohansinghmahecha2000:uRyluGTuCIQXjefE@cluster0.ue1ll.mongodb.net/user",
    {
      useNewUrlParser: true, // Option to use the new URL parser to handle MongoDB connection 
      useUnifiedTopology: true, // Option to use the new Server Discover and Monitoring engine
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
