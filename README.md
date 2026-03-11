![CI](https://github.com/mxn2020/minions-orchestration-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-orchestration

**Clawspace registry, toolbox-to-agent mappings, and fleet configuration**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-orchestration/sdk minions-sdk

# Python
pip install minions-orchestration

# CLI (global)
npm install -g @minions-orchestration/cli
```

---

## CLI

```bash
# Show help
orchestration --help
```

---

## Python SDK

```python
from minions_orchestration import create_client

client = create_client()
```

---

## Project Structure

```
minions-orchestration/
  packages/
    core/           # TypeScript core library (@minions-orchestration/sdk on npm)
    python/         # Python SDK (minions-orchestration on PyPI)
    cli/            # CLI tool (@minions-orchestration/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [orchestration.minions.help](https://orchestration.minions.help)
- Blog: [orchestration.minions.blog](https://orchestration.minions.blog)
- App: [orchestration.minions.wtf](https://orchestration.minions.wtf)

---

## License

[MIT](LICENSE)
