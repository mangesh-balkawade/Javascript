const model = require("../models/state-city-common-model");
const { getConnection } = require("../_helpers/db");
const common = require("../_helpers/common");
const { log } = require("util");

// Finding Country Names With Id
// Returns [country,id]
async function getCountriesData() {
  try {
    const countries = await model.GetCountries();
    if (countries && countries.length > 0) {
      const countryArray = countries.map((country) => ({
        country: country.country,
        id: country.id,
      }));
      return countryArray;
    } else {
      console.log("No countries data found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return [];
  }
}

async function getStates(countries) {
  const conn = getConnection();
  let res = [];
  try {
    for (const country of countries) {
      const name = country.country;
      let country_id = country.id;
      console.log(name);
      const states = await conn.query(
        "SELECT distinct state FROM countrystatecities WHERE country = ?",
        [name]
      );
      let i = 1;
      for (let state of states) {
        res.push({ name, country_id: country_id, state_name: state.state, i });
        let cr_datetime = await common.datetime("db");
        let state_data = {};
        state_data = {
          created_at: cr_datetime,
          updated_at: cr_datetime,
          country_id: country_id,
          state_name: state.state,
          is_delete: 0,
          status: 1,
        };
        let getState = await model.GetStateByCountryState(
          country_id,
          state.state
        );
        if (getState.length == 0) {
          await model.Insert(state_data);
        }
      }
      i = 1;
    }
    return res;
  } catch (err) {
    console.error(err);
  } finally {
    await conn.close();
  }
}

// getCountriesData().then((data) => {
//   getStates(data).then((data) => {
//     console.log(data);
//   });
// });

async function saveCities() {
  const conn = getConnection();
  let states = await conn.query("select country_id,id,state_name from states ");
  for (let state of states) {
    let country = await conn.query(
      `select * from country where id =${state.country_id} `
    );
    // console.log(data.country, state.state_name);
    for (let item of country) {
      let cities = await conn.query(
        "select * from countrystatecities where country=? and state=?",
        [item.country, state.state_name]
      );
      for (let city of cities) {
        let cr_datetime = await common.datetime("db");
        console.log(
          item.country,
          state.country_id,
          state.state_name,
          state.id,
          city.city
        );

        let city_data = {};
        city_data = {
          created_at: cr_datetime,
          updated_at: cr_datetime,
          country_id: state.country_id,
          state_id: state.id,
          city_name: city.city,
          is_delete: 0,
          status: 1,
        };

        let getCity = await model.GetCityByStateCity(state.id, city.city);
        if (getCity.length == 0) {
          await model.InsertCity(city_data);
        }
      }
    }
  }
}

//saveCities();

// getCountriesData()
//   .then((data) => {
//     getStates(data).then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Step 1: Get country_ids between 1 and 132 from the cities table

const conn = getConnection();

conn
  .query(
    "SELECT DISTINCT country_id FROM cities WHERE country_id BETWEEN 1 AND 132;"
  )
  .then((cityData) => {
    const ids = cityData.map((city) => city.country_id);

    // Step 2: Get countries where the id is not in the list of ids

    conn
      .query("SELECT country FROM country WHERE id NOT IN (?)", [ids])
      .then((countryData) => {
        const countries = countryData.map((country) => country.country);
        console.log(countries);
      })
      .catch((error) => {
        console.error("Error retrieving countries:", error);
      });
  })
  .catch((error) => {
    console.error("Error retrieving city IDs:", error);
  });

// let mapping = [
//   { Bahamas: "TheBahamas" },
//   { Beliz: "Belize" },
//   { "Bosnia and Herzegovina": "BosniaandHerzegovina" },
//   { "Britain (United Kingdom)": "UnitedKingdom" },
//   { "Brunei Darussalam": "Brunei" },
//   { "Costa Rica": "CostaRica" },
//   { "Czech Republic": "CzechRepublic" },
//   { "Dominican Republic": "DominicanRepublic" },
//   { "El Salvador": "ElSalvador" },
//   { "England (United Kingdom)": "UnitedKingdom" },
//   { Fiji: "FijiIslands" },
//   { "Holland (Netherlands)": "Netherlands" },
//   { "Netherlands Antilles": "Netherlands" },
//   { "New Zealand": "NewZealand" },
//   { "North Korea": "NorthKorea" },
//   { "Saudi Arabia": "SaudiArabia" },
//   { "Solomon Islands": "SolomonIslands" },
//   { "South Africa": "SouthAfrica" },
//   { "South Korea": "SouthKorea" },
//   { "Sri Lanka": "SriLanka" },
//   { "Trinidad and Tobago": "TrinidadAndTobago" },
//   { "United Kingdom": "UnitedKingdom" },
//   { "United States of America": "UnitedStates" },
// ];

// mapping.forEach(async (item) => {
//   for (const [oldName, newName] of Object.entries(item)) {
//     const updateQuery = `UPDATE country SET country = ? WHERE country = ?`;

//     await conn.query(updateQuery, [newName, oldName]);
//     console.log(oldName, newName);
//   }
// });
