module.exports =  {
    populate: async (commission) => {
        await commission.bulkCreate([
            {name : 'A'},
            {name : 'B'},
            {name : 'C'},
            {name : 'D'},
        ]);
    }
}