# Progetto di ingegneria del software

[Back-end source](https://github.com/bezkoder/nodejs-express-mysql)

[Front-end source](https://github.com/bezkoder/vue-3-crud)

---

## Prerequisiti

Aver già installato:
- [NodeJs & npm](https://nodejs.org/en/download/)
- [MySQL server](https://dev.mysql.com/downloads/mysql/)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html) (Facoltativo)

## Utilizzo

### back-end
Modificare il file `back-end/app/config/db.config.js` con i propri dati
```shell
cd back-end/  
npm install 
npm start
```
Server in esecuzione all'indirizzo `http://localhost:8080/` 

### front-end
```shell
cd front-end/
npm install 
npm run serve
```

Server in esecuzione all'indirizzo `http://localhost:8081/`

---

## ToDo

- [ ] Completare documentazione
- [ ] Design front-end
- [ ] Migiorare codici restituiti dalle risposte delle API

---

## Tutorial

### Configurazione generale
[Tutorial](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/#Configure_MySQL_database_038_Sequelize)

---

## Tutorials Back-end

### Invio richieste POST alle API
[Tutorial](https://www.bezkoder.com/node-js-express-sequelize-mysql/)

---

## Tutorials front-end

### Vue 3
[Tutorial](https://www.bezkoder.com/vue-3-crud/)

---
## Migrazione del database: possibile alternativa
Dalla [documentazione di sequelize](https://sequelize.org/master/manual/migrations.html) si può utilizzare [umzug](https://github.com/sequelize/umzug/tree/v2.x) per migrare il database programmaticamente.
Basta seguire l'[esempio](https://github.com/sequelize/umzug/tree/v2.x#minimal-example), ed applicarlo ai file nella cartella `models`

---

## Altro

[Possibile alternativa: Tutorial](https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20)


