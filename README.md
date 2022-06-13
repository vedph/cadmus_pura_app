# Cadmus PURA App

Quick Docker image build:

1. `npm run build-lib`
2. `ng build --configuration production`
3. `docker build . -t vedph2020/cadmus-pura-app:1.2.0 -t vedph2020/cadmus-pura-app:latest` (replace with the current version).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Production (VeDPH)

1. in `dist/cadmus-pura-app/env.js`: replace `window.__env.apiUrl = "http://localhost:60849/api/";` with `https://6009.cophilab-cloud.ilc.cnr.it/api/`
2. `docker build . -t vedph2020/cadmus-pura-app:1.2.0-prod`

## History

### 1.2.0

- 2022-06-13:
  - upgraded to Angular 14 and refactored forms to use typed components.
  - fixed admin menu.

### 1.1.6

- 2022-05-24: updated packages.

### 1.1.5

- 2022-05-23: upgraded Angular.

### 1.1.4

- 2022-05-13: upgraded Angular and added metadata part.

### 1.1.2

- 2021-12-06: generated Docker image 1.1.2.
- 2021-11-11: upgraded Angular.
- 2021-10-16: updated to use `ms-signatures` from `tgr` rather than from `itinera`.
