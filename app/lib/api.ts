export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        cache: options?.cache || "no-store", // katanya bisa buat data biar lebih real time :)
    })

    if (!res.ok) {
        let errorMessage = `Failed to fetch data from ${endpoint}`;
        try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorMessage;
        } catch (e) {
            console.log(e);
        }

        throw new Error(errorMessage);
    }

    return res.json();
}
