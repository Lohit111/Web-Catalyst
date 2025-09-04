export default function category({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h1 className="text-4xl font-bold">Category: {params.id}</h1>
        </div>
    );
}