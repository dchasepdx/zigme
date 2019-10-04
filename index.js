const { text } = require("micro");
const { parse } = require("querystring");
const axios = require("axios");
const cheerio = require("cheerio");

const getRandomZiggy = require("./getRandomZiggy");
module.exports = async (req, res) => {
  // Parse code received through req
  const body = parse(await text(req));
  let attachments, comic, img;

  try {
    result = await axios.get(
      `https://www.gocomics.com/ziggy/${getRandomZiggy()}`
    );
    console.log(typeof result.data);
    const $ = cheerio.load(result.data);
    img = $(".item-comic-image > img").attr("src");
    console.log("img", img);
  } catch (error) {
    // Capture any errors
    result = error.message;
  }

  attachments = [
    {
      image_url: img
    }
  ];
  const message = "";
  const response_type = "in_channel";

  res.writeHead(200, { "Content-Type": "application/json" });
  // Create response object and send result back to Slack
  res.end(
    JSON.stringify({
      response_type,
      text: message,
      attachments,
      unfurl_media: true
    })
  );
};
