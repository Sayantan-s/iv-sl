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

### Thought Process

- Breaking down all major ui into atoms and organisms
- Kept most of the state globally cause of high interactity and data reusibility (for future usecases)
- Synced server state with ui state buildMatchers to fetch data on api invocation without over

### PerfOps and Good Practices

- Normalized State shape
- DX: Lazy compilation (Easy cold starts)
- Accessibility (Keyboard controlled)
- Optimized chart interactions on hover state through debouncing

### TradeOffs

- Could have used proper semanticity for tables.
- Could have kept the data table filters state colocated to a component, didn't because if it's a highly interactive dashboard, one might need to decouple the business logic from the view + global state might come in handy whereever in the application.
- Filtering and Sorting is not fully generic.
- Could have made each an every component like Listbox/Popover etc custom in the application
