# React MobX Fabric Electron Boilerplate

## How to use
1. Install node modules
```bash
yarn
```
2. Start React
```bash
yarn start
```
1. Start Electron
```bash
yarn estart
```

## How to package
1. Change DEV option to false
```json
/* package.json */
"DEV": false,
```
2. Build React and Electron
```bash
yarn build && yarn package
```
3. Find your package under ```./dist```

