import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";


export function MainForm() {
    return (
        <form className="form" action="">
            <div className="formRow">
                <DefaultInput
                    id="input"
                    type='text'
                    labelText='Task'
                    placeholder='Digite algo'
                />
            </div>

            <div className="formRow">
                <p>Next interval is 25 min</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}