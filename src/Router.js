import { Route, Routes } from "react-router-dom";
import InputForm from "./routes/InputForm";
import TimerView from "./routes/TimerView";

export default function Router(){
    return (
        <Routes>
            <Route exact path="/" element={<InputForm/>}></Route>
            <Route exact path="/timerview" element={<TimerView/>}></Route>
        </Routes>
    )
}