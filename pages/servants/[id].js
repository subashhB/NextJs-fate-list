import React from 'react'

export const getStaticPaths = async() =>{
    const res = await fetch("https://api.atlasacademy.io/export/NA/nice_servant.json");
    const json = await res.json()
    const data = await json.split(0,10);

    const paths = data.map(servant => {
        return {
            params: {id: servant.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

const Details = () => {
  return (
    <div>
        <h1>Details</h1>
    </div>
  )
}

export default Details