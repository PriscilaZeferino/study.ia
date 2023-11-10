import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function salvarTopicos (app: FastifyInstance) {
  app.post('/salvar/topico', async (req, res) => {
    try {
      const bodySchema = z.object({
        topico: z.string(),
        descricao: z.string(),
        palavrasChave: z.string()
      })

      const { topico, descricao, palavrasChave } = bodySchema.parse(req.body)

      await prisma.temas.create({
        data: {
          topico,
          descricao,
          palavrasChave
        }
      })

      return 'Saved with success'
    } catch (error) {
      res.status(500).send('Erro ao salvar os dados')
    }
  })
}
