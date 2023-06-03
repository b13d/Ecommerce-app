import React from "react";

export default async function Product({ params }: { params: { id: string } }) {
  const data = await getData(params.id)

  console.log(data)

  return <h1>My Page {params.id}</h1>;
}

async function getData(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

