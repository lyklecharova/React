import { ListGroup, Button } from 'react-bootstrap';
import { TodoItem } from './TodoItem';

export const TodoList = ({
    // props
    todos,
    onTodoAddClick,
  
}) => {
    return (
        <div style={{ width: "30%", margin: "10px auto" }}>
            <h1>Tod List</h1>

            <ListGroup style={{marginBottom: '10px'}}>
                {todos.map(x => <TodoItem key={x._id} {...x} />)}
            </ListGroup>
            <Button variant="primary" onClick={onTodoAddClick}>Add</Button>

        </div>

    );
}