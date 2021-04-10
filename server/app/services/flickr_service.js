const axios = require("axios");

const SERVICE_URL = "https://api.flickr.com/services/feeds/photos_public.gne";

exports.getRecentImages = () => {
  const params = {
    format: "json",
  };

  return axios
    .get(SERVICE_URL, { params })
    .then((response) => response)
    .catch((error) => error);
};
