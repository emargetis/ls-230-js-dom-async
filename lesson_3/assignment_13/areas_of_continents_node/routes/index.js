let express = require('express');
let router = express.Router();

router.get('/areas_of_continents', (req, res, next) => {
  let continents = {
    asia: 43820000,
    africa: 30370000,
    north_america: 24490000,
    south_america: 17840000,
    antarctica: 13720000,
    europe: 10180000,
    australia: 9008500
  };
  res.set('Access-Control-Allow-Origin', 'https://9a090e2b96e14fe1a11d2563ae32e44e.vfs.cloud9.us-east-2.amazonaws.com:8081');
  res.json(continents);
});

module.exports = router;
