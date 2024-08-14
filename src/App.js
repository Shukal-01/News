// /* eslint-disable no-unused-vars */
// // import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import LoadingBar from 'react-top-loading-bar'
// import News from './components/News';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// export default class App extends Component {
//   pageSize = 10
//   apiKey = process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }
//   setProgress = (progress) => {
//     setState({progress: progress})
//   }
//   render() {//render is used to render html on screen in simple language
//     return (
//       <>
//         <Router>
//           <div>
//             <Navbar/>
//             <LoadingBar height={3}
//         color='#f11946'
//         progress={progress}
//       />
//             <Routes>
//               <Route exact path='/general'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="general" category="general" />
//                 } />
//                 <Route exact path='/all'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="all" category="all" />
//                 } />
//               <Route exact path='/entertainment'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="entertaiment" category="entertainment" />
//                 } />
//               <Route exact path='/business'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="business" category="business" />
//                 } />
//               <Route exact path='/technology'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="technology" category="technology" />
//                 } />
//               <Route exact path='/health'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="health" category="health" />
//                 } />
//               <Route exact path='/science'
//                 element={
//                   <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="science" category="science" />
//                 } />
//             </Routes>
//           </div>
//         </Router>
//       </>
//     )
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

/////////changing class based component to functional based component

/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const pageSize = 10
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <LoadingBar height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="general" category="general" />
              } />
            {/* <Route exact path='/general'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="general" category="general" />
              } /> */}
            <Route exact path='/entertainment'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="entertaiment" category="entertainment" />
              } />
            <Route exact path='/business'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="business" category="business" />
              } />
            <Route exact path='/technology'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="technology" category="technology" />
              } />
            <Route exact path='/health'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="health" category="health" />
              } />
            <Route exact path='/science'
              element={
                <News setProgress={setProgress} apiKey={apiKey} pageSize={10} country="in" key="science" category="science" />
              } />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App