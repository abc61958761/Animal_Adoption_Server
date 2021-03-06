/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('purchase_records', (table) => {
    table.uuid('id').primary();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
    table.integer('count').notNull();
    table.integer('price').notNull();
    table.uuid('purchase_id').references('id').inTable('purchases').index();
    table.uuid('pokemon_id').references('id').inTable('pokemons').index();
    table.enum('status', ['active', 'inactive', 'archive']).notNull().defaultTo('active');
  });
}

/**
 * Drop `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('purchase_records');
}
