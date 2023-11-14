import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement('h1', {id: 'heading'}, `ReactJS`)
const subHeading = React.createElement('h3', {id: 'subHeading'}, 'Learning')
const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'}, [heading, subHeading])
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)