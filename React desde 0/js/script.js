import React from 'https://esm.sh/react@18.2.0'
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client'

const appDomElement = document.getElementById('app')
const root = ReactDom.createRoot(appDomElement)
// root.render('Hola React')

const h = React.createElement

const button1 = h('button', {'data-id': 123}, 'Me gusta 1')
const button2 = h('button', {'data-id': 456}, 'Me gusta 2')
const button3 = h('button', {'data-id': 789}, 'Me gusta 3')

const app = h(React.Fragment, null , [button1, button2, button3])

// //JSX
// <React.Fragment>
//     <button data-id='123'>Button 1</button>
//     <button data-id='456'>Button 2</button>
//     <button data-id='789'>Button 3</button>
// </React.Fragment>

root.render(app)