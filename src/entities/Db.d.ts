/**
 * Db
 *
 * The Db is the main entity of the program.
 * There is only one database instance in the whole program.
 * Meaning, the Db instance is a singleton.
 *
 */
interface Db {
  schema: Schema;
}
