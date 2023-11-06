import Footer from "./components/Footer"
import Header from "./components/Header"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div>
     <Header/>

      <main className="main">

       <TodoList/>
      </main>


      <Footer/>
    </div>
  )
}

export default App
