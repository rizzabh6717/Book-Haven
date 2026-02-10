import { Suspense } from "react";
import BooksPageClient from "./BooksPageClient";

function BooksPageSkeleton() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <div className="h-12 w-64 bg-muted/20 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-6 w-96 bg-muted/20 rounded-lg animate-pulse"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="h-12 flex-1 bg-muted/20 rounded-lg animate-pulse"></div>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-12 w-24 bg-muted/20 rounded-lg animate-pulse"></div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="space-y-3">
                            <div className="aspect-[2/3] bg-muted/20 rounded-lg animate-pulse"></div>
                            <div className="h-4 bg-muted/20 rounded animate-pulse"></div>
                            <div className="h-3 w-2/3 bg-muted/20 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function BooksPage() {
    return (
        <Suspense fallback={<BooksPageSkeleton />}>
            <BooksPageClient />
        </Suspense>
    );
}
