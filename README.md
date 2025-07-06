<div align="center">
<!-- <img src="https://i.imgur.com/9qYPFSA.png" alt="Alt text" width="40">
  ## Millennium for Steam® -->

<h3><img align="center" width="40px" src="https://i.imgur.com/9qYPFSA.png"> &nbsp; &nbsp;<h3>Steam Client Homebrew</h3><h6>https://steambrew.app/</h6></h3>
<br>

</div>

https://steambrew.app/

## Contents

* [User API](./api/)
* [Documentation](./docs/)
* [SteamBrew App](./www/)

## Building

```bash
git clone https://github.com/shdwmtr/steambrew.git
```

### Build Main Site

```bash
cd www
pnpm install 
pnpm run dev
```

### Building Documentation

```bash
cd docs
pnpm install
pnpm run start
```

### Building API

```bash
cd api
npm install # Firebase doesn't support pnpm
npm run shell
```

## Contributing

Anyone can contribute, anything that enchances the end-user experience is appreciated!
