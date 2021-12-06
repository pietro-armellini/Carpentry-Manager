module.exports =  {
    populate: async (commission) => {
        await commission.bulkCreate([
            {name : 'Panchine parco Sant\'Anna'},
            {name : 'Cucina rifugio Bella Vista'},
            {name : 'Staccionata sentiero SAT 64'},
            {name : 'Leggii scuola elementare S. Perotti'},
            {name : 'Banchi DISI'},
            {name : 'Tetto Giovannini'}
        ]);
    }
}