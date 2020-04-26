module.exports = (app) => {
  // const pino = require("pino");
  // const expressPino = require("express-pino-logger");
  // const logger = pino({ level: process.env.LOG_LEVEL || "info" });
  // const expressLogger = expressPino({ logger });
  // app.use(expressLogger);

  const loc = process.env.LOCATION || "Local";
  const s = `hello from ${loc}, how are you doing?`;
  app.get("/", function (req, res) {
    // logger.debug("Calling res.send");
    res.send(s);
    // console.log(req);
  });
};
