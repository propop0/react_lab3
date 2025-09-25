```
Component Tree + Data Flow

App.jsx
|
+-- TodoList (state: [todos])
    |
    +-- AddTodoForm
    |   |
    |   -- State: value (input field content)
    |   |
    |   -- Props In: onAdd (func, from parent)
    |   |
    |   -- Data Flow: onAdd(newTask) ↑ (child → parent: sends new task text)
    |
    +-- TodoItem (rendered multiple times: todos.map)
        |
        -- State: isCompleted (local status)
        |
        -- Props In: id, text, onDelete (func, from parent)
        |
        -- Data Flow:
        - Checkbox toggle → updates local state (isCompleted)
        - Delete Button → onDelete(id) ↑ (child → parent: requests removal)

```