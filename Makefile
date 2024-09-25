PKG_VER := 0.3.3
IMAGE_BASE := bun1.1.29-alpine
TAG := ${PKG_VER}-${IMAGE_BASE}

docker-run:
	docker run --rm -p 3000:3000 itpg-frontend:${TAG}

docker-build:
	docker build -t ghcr.io/vanillaiice/itpg-frontend:${TAG} .

docker-push:
	docker push ghcr.io/vanillaiice/itpg-frontend:${TAG}
