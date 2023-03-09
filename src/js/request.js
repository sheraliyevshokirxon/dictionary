

const request = async (resours) => {

    const req = await fetch(resours)

    const data = await req.json()
    return data
}

export default request