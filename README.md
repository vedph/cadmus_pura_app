# Cadmus PURA App

🐋 Quick Docker image build:

1. `npm run build-lib`
2. update `env.js` and `ng build --configuration production`
3. `docker build . -t vedph2020/cadmus-pura-app:4.0.0 -t vedph2020/cadmus-pura-app:latest` (replace with the current version).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Production (VeDPH)

1. in `dist/cadmus-pura-app/env.js`: replace `window.__env.apiUrl = "http://localhost:60849/api/";` with `https://6009.cophilab-cloud.ilc.cnr.it/api/`
2. `docker build . -t vedph2020/cadmus-pura-app:1.2.0-prod`

## History

- 2024-07-02:
  - updated Angular and packages.
  - added WHG lookup.
  - replaced `color` with `class`.
- 2024-05-24: ⚠️ upgraded to Angular 18 and updated packages.
- 2024-05-22: updated Angular and packages.

### 4.0.0

- 2024-05-11:
  - updated Angular and packages.
  - ⚠️ upgraded to [bricks V2](https://github.com/vedph/cadmus-bricks-shell-v2).
  - replaced Monaco wrapper.
  - added editor plugins and lookup for VIAF and GeoNames.

### 3.0.1

- 2024-03-02: updated Angular and packages.

### 3.0.0

- 2023-11-13: ⚠️ removed TGR dependencies.
- 2023-11-10: ⚠️ upgraded to Angular 17.
- 2023-11-08:
  - updated Angular and packages.
  - removed ELF.
  - opted in for flags editor.
  - opted in for thesaurus import.
- 2023-09-27: updated Angular and packages.
- 2023-09-19: updated Angular and packages. Docker script moved to PostgreSQL.
- 2023-03-07: updated Angular and packages.
- 2023-02-06: updated Angular and packages.

### 2.0.0

- 2022-12-23:
  - updated Angular to 15 and replaced Akita with ELF.
  - updated parts for new Cadmus shell 2.
  - updated Monaco editor.
  - removed Angular Flex Layout.
- 2022-11-10: updated Angular and packages.
- 2022-10-11:
  - updated packages.
  - added preview.

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
