const axios = require('axios');
const Table = require('tty-table');
const config = {
    headers: { "User-Agent": "axios app",
            

        }
};
const options = {
    borderStyle: "solid",
    borderColor: "yellow",
    headerAlign: "center",
    align: "left",
    color: "white",
    truncate: "...",
    width: "90%"
  }
module.exports = function (stateid) {
    // Make a request for a user with a given ID
    axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateid}`, config)
        .then(function (response) {
            // handle success
           // console.table(response.data.states);
           let header = [{
            value: "district_id",
            headerColor: "cyan",
            color: "white",
            align: "left",
            width: 20,
            alias:"DISTRICT ID",
          },
          {
            value: "district_name",
            color: "red",
            width: 40,
            alias:"DISTRICT NAME",
            
          }]
          const out = Table(header,response.data.districts,options).render()
          console.log(out); //prints output

        })
        .catch(function (error) {
            // handle error

            console.log(error);
        })
        .then(function () {
            // always executed  

        });
}