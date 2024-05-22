docker-run:
	docker run --rm -p 3000:3000 itpg-frontend-sveltekit

docker-build:
	docker build -t itpg-frontend-sveltekit .

docker-build-vultr:
	docker build -t ewr.vultrcr.com/vanillaiice/itpg-frontend-sveltekit:0.1.0-bun-1.1.4-alpine .

docker-push-vultr:
	docker push ewr.vultrcr.com/vanillaiice/itpg-frontend-sveltekit:0.1.0-bun-1.1.4-alpine

vultr: docker-build-vultr docker-push-vultr
