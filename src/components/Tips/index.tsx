import { getNextCycleType } from '../../utils/getNextCycleType';
import { useTaskContext } from '../../contexts/TaskContent/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';

export function Tips() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCyleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por <b>{state.config.workTime}</b> min</span>,
        shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime} min</b></span>,
        longBreakTime: <span>Descanso longo</span>,
    };

    const tipsForNoActiveTask = {
        workTime: (
            <span>
                Próximo ciclo é de <b>{state.config.workTime} min</b>
            </span>
        ),
        shortBreakTime: (
            <span>Próximo descaso é de <b>{state.config.shortBreakTime} min</b></span>
        ),
        longBreakTime: <span>Próximo descanso será longo</span>,
    };

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
        </>
    );
}