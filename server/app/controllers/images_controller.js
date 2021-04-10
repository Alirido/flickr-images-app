const flickrService = require("../services/flickr_service");

exports.getImages = (req, res) => {
  flickrService
    .getRecentImages()
    .then((response) => {
      let data = JSON.stringify(response.data);
      let ln = data.length;
      let jsonstr = data.slice(16, ln - 1);
      let jsonObj = JSON.parse(jsonstr);
      console.log(jsonObj);
    })
    .catch((error) => console.log(error));
};
