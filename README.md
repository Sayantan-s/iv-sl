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
- Kept the fetched data in global state (normalized) [even though used them through api hooks]. Just for future usecases
- Might have broken down the application in MFs if the team would have been that big.

### PerfOps / Features

- Normalized State shape
- DX: Lazy compilation (Easy cold starts)
- Accessibility (Keyboard controlled) -> Almost 50-60%
- Optimized chart interactions on hover state through debouncing
- API level caching
- Paginated data fetching for tables
- Minimal Layout Shifts
- Lazy loaded assets(images)
- Responsive upto 380px

### TradeOffs

- Could have kept the data table filters state colocated to a component, didn't because if it's a highly interactive dashboard, one might need to decouple the business logic from the view + global state might come in handy whereever in the application.
- Tables are not fully accessible
- Filtering and Sorting is not fully generic.
- Could have made each an every component like Listbox/Popover etc custom in the application
- Could have added the limits feature for the table. Could have added implemented list virtualization for that case.
- Could have used Suspense based data fetching which would have optimally reduced the bundle size as well as load time.
- Could have implemented in browser persistence using search params

## Inspirations

- Dribble
- Filters (Supbase table filtering)
- Cards (Bento)
- Used **Lovable** for generating svg lines on bar chart
