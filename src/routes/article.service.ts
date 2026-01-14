import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

const createArticle = async (req, res) => {
  const { title, description, body, authorId } = req.body;
  const slug = slugify(title, { lower: true });

  const article = await prisma.article.create({
    data: { title, description, body, slug, authorId }
  });

  res.status(201).json(article);
};

export default { createArticle };
