export const getLibraryCafes = async (queryParams) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/libraryCafes?` + new URLSearchParams(queryParams)) 
    return await res.json()
}

export const createLibraryCafe = async (post) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/libraryCafes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    return await res.json()
}