import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationAndWebsiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://edunavyx.com/#organization",
      "name": "Edunavyx",
      "legalName": "Edunavyx",
      "url": "https://edunavyx.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://edunavyx.com/#logo",
        "url": "https://edunavyx.com/edunavyx-logo.png",
        "contentUrl": "https://edunavyx.com/edunavyx-logo.png",
        "caption": "Edunavyx Logo",
      },
      "image": "https://edunavyx.com/og-image.png",
      "description":
        "Explore career paths, courses, universities, scholarships and global opportunities with EDUNAVYX. Get personalized career and education guidance for your future.",
      "email": "admissions@edunavyx.com",
      "telephone": "+918796556462",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A 60, Delta 2",
        "addressLocality": "Greater Noida",
        "addressCountry": "IN",
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+918796556462",
          "contactType": "customer service",
          "email": "admissions@edunavyx.com",
          "availableLanguage": ["English", "Hindi"],
        },
      ],
      "sameAs": [
        "https://wa.me/918796556462",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://edunavyx.com/#website",
      "url": "https://edunavyx.com/",
      "name": "Edunavyx",
      "description": "Global Education & Career Consultants",
      "publisher": {
        "@id": "https://edunavyx.com/#organization",
      },
      "inLanguage": "en",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EDUNAVYX | Career Guidance, Education & Global Opportunities" },
      {
        name: "description",
        content:
          "Explore career paths, courses, universities, scholarships and global opportunities with EDUNAVYX. Get personalized career and education guidance for your future.",
      },
      { name: "author", content: "Edunavyx" },
      { property: "og:site_name", content: "Edunavyx" },
      { property: "og:title", content: "EDUNAVYX | Career Guidance, Education & Global Opportunities" },
      {
        property: "og:description",
        content:
          "Explore career paths, courses, universities, scholarships and global opportunities with EDUNAVYX. Get personalized career and education guidance for your future.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://edunavyx.com/" },
      { property: "og:image", content: "https://edunavyx.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "EDUNAVYX - Career Guidance, Education & Global Opportunities" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EDUNAVYX | Career Guidance, Education & Global Opportunities" },
      {
        name: "twitter:description",
        content:
          "Explore career paths, courses, universities, scholarships and global opportunities with EDUNAVYX. Get personalized career and education guidance for your future.",
      },
      { name: "twitter:image", content: "https://edunavyx.com/og-image.png" },
      { name: "twitter:image:alt", content: "EDUNAVYX - Career Guidance, Education & Global Opportunities" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationAndWebsiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
