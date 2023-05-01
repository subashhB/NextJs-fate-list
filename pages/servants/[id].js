import React from 'react'

export const getStaticPaths = async() =>{
    const res = await fetch("https://api.atlasacademy.io/export/NA/nice_servant.json");
    const json = await res.json()
    const data = await json.slice(0,10);

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

export const getStaticProps = async(context) =>{
    const id = context.params.id
    const res = await fetch("https://api.atlasacademy.io/export/NA/nice_servant.json");
    const json = await res.json();
    const data = await json.slice(0,10);

    const servant = data.find(s => s.id == id)
    return {
        props: { servant: servant }
    }
}

const Details = ({ servant }) => {
  return (
    <div>
        <h1>{ servant.name }</h1>
        <p>Class: { servant.className }</p>
        <p>Rarity: { servant.rarity }</p>
        <p>Cost: { servant.cost }</p>

    </div>
  )
}

export default Details