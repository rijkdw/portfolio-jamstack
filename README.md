# Portfolio with Next.js and Sanity CMS

## Project structure guidelines

* `apps`
    * `/web`
        * Outward-facing Next.js app with Sanity Studio (from `packages/content`) embedded

* `packages`
    * `/shared`
        * Common utils and types, no explicit dependencies on Sanity or Next.js
    * `/sanity-config`
        * Schema, plugin, and client configuration for Sanity
    * `/content`
        * Provides Sanity Studio as React component to `apps/web`
        * Frontend-tech-agnostic data fetching
        * Depends on `packages/sanity-config`
        * Depends on Sanity so that other apps/packages (notably `apps/web`) doesn't need to
