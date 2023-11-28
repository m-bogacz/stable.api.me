export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", "5432"),
      database: env("DATABASE_NAME", "dbhorses"),
      user: env("DATABASE_USERNAME", "dbhorses"),
      password: env("DATABASE_PASSWORD", "dbhorses"),
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    debug: false,
  },
});
