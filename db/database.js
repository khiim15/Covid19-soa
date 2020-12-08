const { Pool } = require('pg')
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'postgres',
password: '0123',
port: 5432,
})

const getAllCountry = async() => {
    const sql= `SELECT "Province/State" as State, "Country/Region" as Country from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllConfirmed = async() => {
    const sql= `SELECT "3/23/20" as Confirmed from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllRecovered = async() => {
    const sql= `SELECT "3/23/20" as Confirmed from covid19_recovered_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllRecovered2 = async() => {
    const sql= `SELECT "3/23/20" as recovered from covid19_recovered_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
const getAllDeath = async() => {
    const sql= `SELECT "3/23/20" as Confirmed from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
const getAllDeath2 = async() => {
    const sql= `SELECT "3/23/20" as death from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getChart(){
    const sql = `SELECT sum(covid19_confirmed_csv."3/23/20") as date_confirmed,sum(covid19_death_csv."3/23/20") as date_deaths,sum(covid19_recovered_csv."3/23/20") as date_recovered
    from covid19_confirmed_csv , covid19_death_csv , covid19_recovered_csv
    where covid19_confirmed_csv."Country/Region"= covid19_death_csv."Country/Region" and covid19_confirmed_csv."Province/State" = covid19_death_csv."Province/State" 
    and covid19_confirmed_csv."Country/Region"= covid19_recovered_csv."Country/Region" and covid19_confirmed_csv."Province/State" = covid19_recovered_csv."Province/State" `
    const data = await pool.query(sql);
    return data;

}

const getLatLong = async() => {
    const sql= `SELECT "Province/State" as State , "Country/Region" as Country, lat , long from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
const getTotalConfirmed = async () => {
    const sql = `SELECT sum("3/22/20") as Confirmed from covid19_confirmed_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalRecovered = async () => {
    const sql = `SELECT sum("3/22/20") as Recovered from covid19_recovered_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalDeaths = async () => {
    const sql = `SELECT sum("3/22/20") as Deaths from covid19_death_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getLastWeekConfirmed = async () => {
    const sql = `SELECT sum("3/16/20") as Day1, sum("3/17/20") as Day2, sum("3/18/20") as Day3, sum("3/19/20") as Day4, sum("3/20/20") as Day5, sum("3/21/20") as Day6, sum("3/22/20") as Day7
    from covid19_confirmed_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getLastWeekRecovered = async () => {
    const sql = `SELECT sum("3/16/20") as Day1, sum("3/17/20") as Day2, sum("3/18/20") as Day3, sum("3/19/20") as Day4, sum("3/20/20") as Day5, sum("3/21/20") as Day6, sum("3/22/20") as Day7
    from covid19_recovered_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getLastWeekDeaths = async () => {
    const sql = `SELECT sum("3/16/20") as Day1, sum("3/17/20") as Day2, sum("3/18/20") as Day3, sum("3/19/20") as Day4, sum("3/20/20") as Day5, sum("3/21/20") as Day6, sum("3/22/20") as Day7
    from covid19_death_csv`;
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}




module.exports = {
    getAllCountry,
    getAllConfirmed,
    getAllRecovered,
    getAllRecovered2,
    getAllDeath,
    getAllDeath2,
    getTotalConfirmed,
    getTotalRecovered,
    getTotalDeaths,
    getLastWeekConfirmed,
    getLastWeekRecovered,
    getLastWeekDeaths,
    getLatLong,
    getChart
   
}