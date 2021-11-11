# Cadmus PURA App

Quick Docker image build:

1. `npm run build-lib`
2. `ng build --configuration production`
3. `docker build . -t vedph2020/cadmus-pura-app:1.1.1 -t vedph2020/cadmus-pura-app:latest` (replace with the current version).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## History

- 2021-11-11: upgraded Angular.
- 2021-10-16: updated to use `ms-signatures` from `tgr` rather than from `itinera`.
