#!/bin/bash
set -e

echo "Building Docker image..."
docker build -t my-blog-api:latest -t my-blog-api:$GITHUB_SHA ./docker
docker tag my-blog-api:latest my-blog-api:${GITHUB_SHA}
