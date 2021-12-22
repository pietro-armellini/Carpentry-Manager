# Progetto di ingegneria del software

<p align="center">
  <img src="./front-end/src/assets/logo.png" width="50%" alt="logo"/>
</p>

Descrizione progetto

![gif architettura](./path)

## Prerequisiti

Aver già installato:
- [NodeJs & npm](https://nodejs.org/en/download/)
- [MySQL server](https://dev.mysql.com/downloads/mysql/)

---

## Utilizzo

### back-end
Modificare il file `back-end/db/config/config.json` con i propri dati
```shell
cd back-end/  
npm ci 
npm run db:reset
npm start
```
Documentazione delle API disponibile all'indirizzo `http://localhost:8080/api-docs/`

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

