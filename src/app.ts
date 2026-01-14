import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import articleService from './routes/article.service';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/articles', async (_req, res) => {
  const articles = await prisma.article.findMany({ include: { author: true } });
  res.json(articles);
});

app.post('/articles', articleService.createArticle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
