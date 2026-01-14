#!/bin/bash
set -e

echo "Deploying Docker container..."
docker stop my-blog-api || true
docker rm my-blog-api || true
docker run -d --name my-blog-api -p 3000:3000 my-blog-api:latest
