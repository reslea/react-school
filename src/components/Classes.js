import React from 'react'

export default function Classes({ classes }) {
  return (
    <div>
        <ul>
            {classes?.map(c => <li key={c.id}>{c.title}</li>)}
        </ul>
    </div>
  )
}