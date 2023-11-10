import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function listarTopicos (app: FastifyInstance) {
  app.get('/listar/topicos', async () => {
    const topicos = await prisma.temas.findMany()
    return topicos
  })
}
