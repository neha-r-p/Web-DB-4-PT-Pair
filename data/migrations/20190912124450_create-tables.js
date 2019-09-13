
exports.up = function(knex) {
  return knex.schema
  	.createTable('recipes', tbl => {
		tbl.increments();

		tbl.string('recipe_name', 255).notNullable();
		tbl.string('prep_time', 16)
		tbl.string('cook_time', 16)
	  })
  	.createTable('ingredients', tbl => {
		  tbl.increments();
		  tbl.string('ingredient_name', 255).notNullable()
	  })
  	.createTable('recipe_ingredients', tbl => {
		  tbl
			  .integer('recipe_id')
			  .unsigned()
			  .references('id')
			  .inTable('recipes')
			  .onDelete('CASCADE')
			  .onUpdate('CASCADE');
		tbl
			.integer('ingredient_id')
			.unsigned()
			.references('id')
			.inTable('ingredients')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		tbl.float('quantity').notNullable();
		tbl.primary(['recipe_id', 'ingredient_id'])
	  })
  	.createTable('steps', tbl => {
		tbl.increments();
		tbl.integer('step_number')
			.unsigned()
			.notNullable();
		tbl.string('description', 512)
			.notNullable();
		tbl
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	  })
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('steps')
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes')
};
