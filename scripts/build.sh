#!/bin/bash
set -e

echo "Building Docker image..."
docker build -t my-blog-api:latest .
docker tag my-blog-api:latest my-blog-api:${GITHUB_SHA}
