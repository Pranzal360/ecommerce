const fetchLimited = async () => {
    let data = await fetch('https://fakestoreapi.com/products?limit=5')
    let json = await data.json()
}

export default fetchLimited