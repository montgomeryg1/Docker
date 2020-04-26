const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
require("./routes/routes")(app);

app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});
