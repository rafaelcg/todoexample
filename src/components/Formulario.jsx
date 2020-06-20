import React from "react";
import { Box, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
import Axios from "axios";

const Formulario = () => {
  const [task, setTask] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const createTask = () => {
    Axios.post("http://localhost:3001/add", {
      taskName: task,
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Label htmlFor="email">To-do:</Label>
      <Input
        id="task"
        name="task"
        type="text"
        placeholder="Type your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={() => createTask()}>Save</Button>
      {success && <div>Successo!</div>}
    </Box>
  );
};

export default Formulario;
