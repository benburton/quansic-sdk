# quansic-sdk

This is a Bun/TypeScript REST SDK for the [Quansic API](https://x1-api.quansic.com/api-docs/), and a reference GraphQL service implementation built on top of it. It is very much a proof of concept.

## Getting Started

Install [Bun](https://bun.sh):

```shell
curl -fsSL https://bun.sh/install | bash
```

Copy template `.env` file (and then fill in API key):

```shell
cp .env.template .env
```

Install dependencies:

```shell
bun install
```

Run the GraphQL reference service:

```shell
bun dev
```

Visit the running service on localhost ([`http://localhost:3000/graphql`](http://localhost:3000/graphql) is the default)

## TODO

* Improve documentation.
* Stop using Axios. Quick to get started, but port to native fetch.
* Separate Quansic REST from GraphQL service implementation. Use [Bun Workspaces](https://bun.sh/docs/install/workspaces).
* Export ESM and CommonJS modules so that people can actually use this
    * Publish these to NPM
* Add unit/integration tests