import Link from "next/link"

export default function NotFound() {
  return (
    <div className="grid min-h-[60svh] place-items-center px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-mono text-7xl font-medium">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
        <Link
          href="/"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}
