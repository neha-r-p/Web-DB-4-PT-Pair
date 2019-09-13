
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, description: 'Bring water with salt to boil'},
        {recipe_id: 1, step_number: 2, description: 'Add noodles to water and cook 10 mins'},
        {recipe_id: 1, step_number: 3, description: 'Drain noodles'},
        {recipe_id: 1, step_number: 4, description: 'Douse noodles with tomato sauce'},
        {recipe_id: 2, step_number: 1, description: 'Rest dough at room temp for 20 minutes, and preheat oven to 425 degrees F'},
        {recipe_id: 2, step_number: 2, description: 'Roll out dough to 12 inch circle'},
        {recipe_id: 2, step_number: 3, description: 'Slather tomato sauce onto the pizza dough'},
        {recipe_id: 2, step_number: 4, description: 'Dump cheese evenly on top of the pizza'},
        {recipe_id: 2, step_number: 5, description: 'Bake pizza for 12 minutes'},
      ]);
    });
};
