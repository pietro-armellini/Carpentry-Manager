module.exports =  {
    populate: async (manufacturing) => {
        await manufacturing.bulkCreate([
            {name : 'Taglio'},
            {name : 'Levigatura'},
            {name : 'Piallatura'},
            {name : 'Verniciatura'},
            {name : 'Sverniciatura'},
            {name : 'Assemblaggio'},
            {name : 'Fresatura'},
            {name : 'Finitura'},
            {name : 'Lucidatura'},
            {name : 'Rusticatura'},
            {name : 'Spazzolatura'}
        ]);
    }
}