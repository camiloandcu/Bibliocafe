export const getLibraryCafes = async (queryParams) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/libraryCafes?` + new URLSearchParams(queryParams)) 
    return await res.json()
}