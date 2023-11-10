import fastify from "fastify";
import { fastifyCors } from '@fastify/cors'
import { listarTopicos } from "./routes/listarTopics";
import { salvarTopicos } from "./routes/saveTopics";

const app = fastify();
app.register(fastifyCors, { origin: '*' })

app.register(listarTopicos)
app.register(salvarTopicos)
app
  .listen({
    port: 3333
  })
  .then(() => console.log('HTTP Server running!'))
