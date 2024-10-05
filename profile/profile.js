// import React, {useState} from 'react';
// import Tasks from '../test/Tasks.js'
// import TaskList from '../test/Tasks.js'

// const names= [
//   {
//       id:8,
//       name: 'name'
//   }
// ]

// function App() {

//   const [listOfTasks, setTasks] = useState(names)

//   const updateHandler = (task) => {
//     setTasks(listOfTasks.map(item => {
//       if(item.id === task.id) {
//         return {
//           ...item,
//           chore: task.chore
//         }
//       } else {
//         return task
//       }
//     }))
//   }

// const cardComponents = cardData.map(card => {
//   return <Card key = {card.id} name = {card.name}/>
// })

// return (
//   <div>
//     <Header/>
//     <Dates/>
//     <div className = 'card-container'>
//     {cardComponents}
//     </div>
//     <TaskList jobItems = {listOfTasks} setTasks = {setTasks} updateHandler = {updateHandler}/>
//     <div>
//       <Footer/>
//     </div>
// </div>
// )
// }

// export default App;