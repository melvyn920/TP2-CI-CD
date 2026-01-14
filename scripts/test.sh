#!/bin/bash
set -e

echo "Running tests..."
npm install
npx prisma generate
npx prisma db push
npm test
