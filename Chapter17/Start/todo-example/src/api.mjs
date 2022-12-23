export const saveTodo = (todo) => {
  const result = global.fetch("/todos", {
    method: "POST",
    body: { todo },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.ok;
};
