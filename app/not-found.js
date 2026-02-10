import Link from "next/link";

export default function NotFound() {
    return (
        <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-display text-6xl font-bold mb-4 text-primary">404</h1>
                <h2 className="font-display text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-md gradient-accent text-primary-foreground font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow"
                >
                    Go Home
                </Link>
            </div>
        </main>
    );
}
