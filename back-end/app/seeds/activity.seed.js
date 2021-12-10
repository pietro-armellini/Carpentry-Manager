module.exports =  {
    populate: async (activity) => {
        await activity.bulkCreate([
            {
                commissionName: 'Panchine parco Sant\'Anna',
                manufacturingName: 'Verniciatura',
                date: '2021-12-01',
                notes: 'Le panchine sono state verniciate in impregnante bianco',
                time: 120
            },
            {
                commissionName: 'Cucina rifugio Bella Vista',
                manufacturingName: 'Assemblaggio',
                date: '2021-12-05',
                notes: 'Sono stati assemblati quattro mobili',
                time: 70
            },
            {
                commissionName: 'Staccionata sentiero SAT 64',
                manufacturingName: 'Levigatura',
                date: '2021-12-12',
                notes: 'E\' stata utilizzata carta vetrata con grana 120',
                time: 60
            },
            {
                commissionName: 'Leggii scuola elementare S. Perotti',
                manufacturingName: 'Lucidatura',
                date: '2021-12-20',
                notes: 'Sono stati lucidati cinque leggii',
                time: 10
            },
            {
                commissionName: 'Banchi DISI',
                manufacturingName: 'Taglio',
                date: '2021-12-03',
                notes: 'Il tagli è stato effettuato con un lama da 34 denti',
                time: 45
            },
            {
                commissionName: 'Cucina rifugio Bella Vista',
                manufacturingName: 'Finitura',
                date: '2021-12-09',
                notes: 'E\' stato installato il bordo del top',
                time: 35
            },
            {
                commissionName: 'Tetto Giovannini',
                manufacturingName: 'Piallatura',
                date: '2021-12-26',
                notes: 'Sono state piallate 15 travi',
                time: 200
            }
        ]);
    }
}