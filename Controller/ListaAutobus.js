var { db_connection, db_close, pool } = require("./db");

const getAutobus = (request, response) => {
  try {
    var p1;
    // db_connection();
    pool.query('SELECT * FROM public.autobus ORDER BY id ASC', (error, results) => {
      //response.send((results));
      p1= results.rows;
      console.log(results.rows);
      response.send((results.rows));
    })
    // db_close();
  } catch (error) {
    console.log(error);
    ListaAutobus = [
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" },
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" },
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" },
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" },
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" },
      { nome: "compagnia 1", partenza: "Milano", arrivo: "Abruzzo", giornoPartenza: "19 Febbraio", totPosti: 52, durataViaggio: "201 mins" }
    ];

    response.send((ListaAutobus));
  }

  // response.send(results.rows)

};

module.exports = {
  getAutobus,
};
