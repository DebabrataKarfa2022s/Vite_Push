import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

// import { createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout'
// import Content from './components/Content'
// import Another from './components/Another'
// import About from './components/About'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App/>,
//       children: [
//         {
//           path: "content",
//           element: <Content />
//         },
//         {
//           path: "admin/another",
//           element: <Another/>,
          
//         },
//         {
//           path: "about",
//           element: <About/>
//         }
//       ]
//     }
//   ])


// const router= createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}> 
//     <Route path='content' element={<Content/>}/> 
//     <Route path='another' element={<Another/>}/>
//     </Route>

    
//   ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
