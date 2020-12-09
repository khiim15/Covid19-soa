var express = require('express');
var router = express.Router();
const db = require('../db/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const result = await db.getAllCountry();
  const confirmed = await db.getAllConfirmed();
  const recovered = await db.getAllRecovered();
  const death = await db.getAllDeath();

  let objectCountry = [];
  for (const key in result.rows) {
    objectCountry[key] = {
      state: result.rows[key].state,
      country: result.rows[key].country,
      confirmed: confirmed.rows[key].confirmed,
      recovered: recovered.rows[key].confirmed,
      death: death.rows[key].confirmed,
    }
  }
  res.render('index', { countrys: objectCountry });
});


router.get('/table', async function (req, res, next) {
  const result = await db.getAllCountry();
  const confirmed = await db.getAllConfirmed();
  const recovered = await db.getAllRecovered();
  const death = await db.getAllDeath();

  let objectCountry = [];
  for (const key in result.rows) {
    objectCountry[key] = {
      state: result.rows[key].state,
      country: result.rows[key].country,
      confirmed: confirmed.rows[key].confirmed,
      recovered: recovered.rows[key].confirmed,
      death: death.rows[key].confirmed,
    }
  }
  res.render('table', { countrys: objectCountry });
});




router.get('/map', async function (req, res, next) {
  const getLatlong = await db.getLatLong();
  const getConfirmed = await db.getAllConfirmed();
  const getRecovered = await db.getAllRecovered2();
  const getDeath = await db.getAllDeath2();

  res.render('map', { maps: getLatlong.rows, confirmed: getConfirmed.rows, recovered: getRecovered.rows, death: getDeath.rows });

});

router.get('/total', async function (req, res, next) {

  const TotalConfirmed = await db.getTotalConfirmed();
  const TotalRecovered = await db.getTotalRecovered();
  const TotalDeaths = await db.getTotalDeaths();
  const lastWeekConfirmed = await db.getLastWeekConfirmed();
  const lastWeekRecovered = await db.getLastWeekRecovered();
  const lastWeekDeaths = await db.getLastWeekDeaths();

  const data = {
    TotalConfirmed: TotalConfirmed.rows[0].confirmed,
    TotalRecovered: TotalRecovered.rows[0].recovered,
    TotalDeaths: TotalDeaths.rows[0].deaths
  }

  res.render('total', {
    data: data,
    lastWeekConfirmed: lastWeekConfirmed.rows[0],
    lastWeekRecovered: lastWeekRecovered.rows[0],
    lastWeekDeaths: lastWeekDeaths.rows[0],
  });
});

router.get('/chart', async function (req, res, next) {
  const result = await db.getChart();
  console.log(result.rows);
  res.render('chart', { resultData: result.rows });
});


module.exports = router;