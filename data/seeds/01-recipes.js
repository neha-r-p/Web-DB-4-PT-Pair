
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Spaghetti', prep_time: '5 min', cook_time: '20 min'},
        {recipe_name: 'Pizza', prep_time: '30 min', cook_time: '15 min'},
       
      ]);
    });
};
