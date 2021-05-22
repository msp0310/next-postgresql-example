import { Client } from 'pg'

export default async (req, res) => {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'mako0310',
    port: 5432
  })
  client.connect()

  const { rows: results } = await client.query('select current_timestamp')
  res.status(200).json(results[0])
}
