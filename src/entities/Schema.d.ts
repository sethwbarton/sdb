/**
 * Schema
 *
 * The Schema represents the shape of the entire Database.
 * Schemas in SDB consist of tables - which each have their own
 * columns, rows, and names.
 */
interface Schema {
  relations: Relation[];
}
