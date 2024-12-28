all: help

start-hugo-dev:
	hugo serve --disableFastRender --ignoreCache

help:
	cat Makefile

.PHONY: start-hugo-dev help