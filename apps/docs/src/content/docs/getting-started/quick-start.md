---
title: Quick Start
description: Get up and running with Minions Orchestration in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-orchestration/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_orchestration import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
orchestration info
```
