import Knex from 'knex'

export async function up(knex: Knex) {
  // criar tabela
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('banner_url').notNullable();
    table.string('thumbnail_url').notNullable();
    table.string('preview_url').nullable();
    table.decimal('regular_price').notNullable();
    table.decimal('extended_price').nullable();
    table.string('version').notNullable();
  });
}

export async function down(knex: Knex) {
  // voltar atras (deletar tabela)
  return knex.schema.dropTable('items');
}