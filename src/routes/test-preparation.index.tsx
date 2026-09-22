import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/test-preparation/")({
  beforeLoad: () => {
    throw redirect({
      to: "/test-preparation/$testSlug",
      params: { testSlug: "cuet" },
    });
  },
});
