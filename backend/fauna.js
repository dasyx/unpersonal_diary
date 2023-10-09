// @ts-nocheck
import faunadb from "faunadb";

const faunaKey = process.env.FAUNADB_SECRET;

const client = new faunadb.Client({
  secret: "fnAFPx0yZJAAzuduHuaeJvQyABQs5QWQ798vL6ZJ",
});

// ... Reste du code
// Vérifiez la connexion à FaunaDB
export async function checkConnection() {
  const q = faunadb.query;
  try {
    await client.query(q.Paginate(q.Collections()));
    console.log("Connexion à FaunaDB réussie");
  } catch (error) {
    console.error("Échec de la connexion à FaunaDB:", error);
  }
}
