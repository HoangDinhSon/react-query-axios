import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../Api/todoApi";
import {useState} from "react";
function TodoList() {
    const [newTodo , setNewTodo] =useState("");
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        error,
        data :todos,
    
    }= useQuery("todos" , getTodos)
    // thêm todo bằng mutation
    const addTodoMutation =useMutation(addTodo,{
        onSuccess: ()=>{
            //invalis cache and refreches
            queryClient.invalidateQueries(todos)
        }
    })

    const updateTodoMutation =useMutation(updateTodo,{
        onSuccess: ()=>{
            //invalis cache and refreches
            queryClient.invalidateQueries(todos)
        }
    })

    const deleteTodoMutation =useMutation(deleteTodo,{
        onSuccess: ()=>{
            //invalis cache and refreches
            queryClient.invalidateQueries(todos)
        }
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        addTodoMutation.mutate({id :1 , tittle : newTodo ,completed :false })

    }
    const newItemSection =(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id ="new todo "
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
                placeholder="enter new todo "

            />
            <submit type="button" className = "button"></submit>
        </form>
    ) 
    let content ;
    if (isLoading){
        ( <p>loadding...</p>)
    }else if (isError){
        content = <p>{error.message}</p>
    }else {
        content= JSON.stringify(todos)
    }

    

  return (
    <main>
        <h1>To do List</h1>
        {newItemSection}
        {content}
    </main>
  );
}




export default TodoList;
