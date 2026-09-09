# Service detail pages

## What will change
- Turn each of the six homepage service cards into a full clickable link.
- Add a dedicated detail URL for every service, with a premium service overview, what is included, the process, expected outcomes, and a consultation call to action.
- Keep the EDUNAVYX visual language and ensure the pages work cleanly on mobile and desktop.

## Technical details
- Store service slugs and detail content in one shared data module so homepage cards and detail pages stay synchronized.
- Add a dynamic TanStack route at `/services/$serviceSlug` with service-specific page metadata and a graceful not-found state.
- Use router links for card navigation and preserve keyboard/focus accessibility.
- Verify all six links, page rendering, metadata, mobile layout, and browser errors.
