
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'package of 1dry spaghetti noodles'},
        {ingredient_name: 'cups of water'},
        {ingredient_name: 'teaspoons salt'},
        {ingredient_name: 'ounces tomato sauce'},
        {ingredient_name: 'pizza dough'},
        {ingredient_name: 'ounces shredded mozzarella'},
      ]);
    });
};
