import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store.ts";
import {
    add,
    decrement,
    subtract
} from "./counterSlice.ts";
import {useEffect} from "react";
import {fetchCounter, increaseCounter} from "./counterThunk.ts";

const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const counterLoading = useSelector((state: RootState) => state.counter.isLoading);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCounter());
    }, [dispatch]);

    const onIncrement = async () => {
        await dispatch(increaseCounter());
        await dispatch(fetchCounter());
    }

    return (
        <div>
            <h1>{counterLoading ? 'Loading...' : counterValue}</h1>
            <button onClick={onIncrement}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(add(5))}>Increase by 5</button>
            <button onClick={() => dispatch(subtract(5))}>Decrease by 5</button>
        </div>
    );
};

export default Counter;