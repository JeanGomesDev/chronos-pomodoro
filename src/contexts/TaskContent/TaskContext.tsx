import { createContext } from "react";
import { initialTaskState } from "./initialTaskState";
import type { TaskStateModel } from "../../models/TaskStateModel";
import type { TaskActionModal } from "./taskActions";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModal>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
