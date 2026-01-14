import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string, password: string) => {
  const hashed = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { username, email, password: hashed }
  });
};

export const getUser = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};
