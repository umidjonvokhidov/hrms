// app/(routes)/not-found.tsx

import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      className="flex h-screen w-full items-center justify-center px-6"
    >
      <div className="max-w-xl w-full flex flex-col items-center text-center gap-y-8">
        <div className="flex flex-col items-center gap-y-4">
          <div className="rounded-full bg-primary-100 text-primary p-3 ring-1 ring-primary">
            <AlertCircle className="size-8" aria-hidden="true" />
          </div>

          <h1 className="text-3xl md:text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Page not found
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            The page you're looking for doesn't exist or may have been moved.
            Check the URL, or use the options below to get back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/">
            <Button className="w-full sm:w-auto">Return Home</Button>
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            If you believe this is an error, please contact support or try again
            later.
          </p>
        </div>
      </div>
    </section>
  );
}
