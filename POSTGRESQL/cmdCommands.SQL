These are special commands only in psql (the PostgreSQL interactive terminal):

| Command         | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `\?`            | Show all available `psql` commands                                 |
| `\l` or `\list` | List all databases                                                 |
| `\c dbname`     | Connect to a database (`\c testdb`)                                |
| `\dt`           | List all tables in the current database                            |
| `\d tablename`  | Describe a table (schema, columns, constraints)                    |
| `\dn`           | List all schemas                                                   |
| `\dv`           | List all views                                                     |
| `\di`           | List indexes                                                       |
| `\du`           | List all roles/users                                               |
| `\password`     | Change password for current user                                   |
| `\q`            | Quit `psql`                                                        |
| `\conninfo`     | Show current connection info (database, user, host, port)          |
| `\timing`       | Toggle query execution time display                                |
| `\x`            | Expanded display mode (better table output)                        |
| `\! command`    | Run a shell command from inside `psql` (e.g., `\! cls` or `\! ls`) |
