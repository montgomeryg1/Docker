const express = require("express");
const app = express();
require("./routes/routes")(app);

app.listen(process.env.PORT || 4000);
