all: help

start-hugo-dev:
	hugo serve --disableFastRender --ignoreCache --buildDrafts --buildFuture

test-e2e:
	npm run test:e2e

start-e2e-ui:
	npm run test:e2e:ui

show-e2e-report:
	npx playwright show-report

update-modules:
	hugo mod get -u

help:
	cat Makefile

.PHONY: start-hugo-dev update-modules help
