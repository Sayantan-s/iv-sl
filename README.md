## Setup

Install the dependencies:

```bash
bun i
```

## Get started

Start the dev server:

```bash
bun serve
```

### PerfOps

- Normalized State shape
- Lazy compilation (Easy cold starts)

### TradeOffs

- Could have used proper semanticity for tables.
- Could have kept the data table filters state colocated to a component, didn't because if it's a highly interactive dashboard, one might need to decouple the business logic from the view + global state might come in handy whereever in the application.
