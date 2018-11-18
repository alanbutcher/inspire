

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/alanbutcher/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodos();
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		let todo = todoList.find(i => i._id == todoId) ///MODIFY THIS LINE
		
		if (todo.complete = !todo.complete)
				
			//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
			todoApi.put(todoId, todo)
				.then(function (res) {
					getTodos()
				
					//DO YOU WANT TO DO ANYTHING WITH THIS?
				})
		
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		todoApi.delete(todoId)
			.then(res => {
			getTodos()
		})
		// Umm this one is on you to write.... The method is a DELETE

	}

}
