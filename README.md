# Progetto di ingegneria del software

## Prerequisiti

Aver già installato:
- [NodeJs & npm](https://nodejs.org/en/download/)
- [MySQL server](https://dev.mysql.com/downloads/mysql/)

## Utilizzo

### back-end
Modificare il file `back-end/db/config/config.json` con i propri dati
```shell
cd back-end/  
npm ci 
npm run db:reset
npm start
```
Server in esecuzione all'indirizzo `http://localhost:8080/`

*Il comando `npm run db:reset` si utilizza quando si vuole portare il database allo stato iniziale
#### testing
```shell
npm test
```
### front-end
```shell
cd front-end/
npm ci 
npm run serve
```

Server in esecuzione all'indirizzo `http://localhost:8081/`

---

## ToDo

- Completare documentazione
- Completare Readme
- Refactoring: 
    - Sostituire manufacturing con manufacture
    - Indentare codice con clang-format
    - Sistemare nomi tabelle e cercare convenzioni
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


