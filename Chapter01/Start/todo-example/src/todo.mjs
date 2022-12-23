export const emptyTodo = () => ({
  title: "",
  dueDate: null,
});

export const makeTodo = ({ title, dueDate }) => {
  if (!title || title === "") {
    throw new Error("title cannot be blank");
  }
  return {
    title,
    dueDate,
  };
};

export const markAsDone = (todo) => ({
  ...todo,
  completedAt: Date.now(),
});
