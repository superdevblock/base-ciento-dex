# 🥞 Pancake Frontend

This project contains the main features of the pancake application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## Documentation

- [Info](doc/Info.md)
- [Cypress tests](doc/Cypress.md)

## Quick Start

install dependencies using **yarn**

```sh
yarn
```

start the development server

```sh
yarn dev
```

build with production mode

```sh
yarn build

# start the application after build
yarn start
```

## Adding New Chain

### Config dex contracts:

- Update `ROUTER_ADDRESS` in `src/config/constants/exchange.ts`
- Update `INIT_CODE_HASH`, `FACTORY_ADDRESS`, `WETH` in `packages/swap-sdk/src/constants.ts`

### Add chain to Selection Network

- Enable chain in file `src/utils/wagmi.ts`
- Update file `src/components/NetworkSwitcher.tsx`

### Edit sources and addresses of tokens

- Custom sources in `src/config/constants/lists.ts`
- Extra config for exchange in `src/config/constants/exchange.ts`
- Tokens management: All the tokens are in `/packages/tokens/src/[chainId].ts`. To add a Token to the exchange lists:
  - For the default list: `/config/constant/tokenLists/pancake-default.tokenlist.json`
  - To blacklist a token: `/config/constant/tokenListspancake-unsupported.tokenlist.json`

## Deploy to Vercel

### Web

- Build & Development Settings:
  - Build Command: `yarn build`
  - Install Command: `yarn install`
- Root Directory: empty

### Bridge app

- Build & Development Settings:
  - Build Command: `cd ../.. && turbo run build --filter={/apps/bridge}...`
  - Install Command: `yarn install`
- Root Directory: `apps/bridge`
