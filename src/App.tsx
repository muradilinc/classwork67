// import {legacy_createStore as createStore, Action} from "redux";
import './App.css';
import Counter from "./containers/Counter/Counter.tsx";
//
// interface State {
//     counter: number;
// }
//
// interface ActionWithPayload extends Action{
//     payload?: number;
// }
//
// const initialState: State = {
//     counter: 0,
// }
//
// const rootReducer = (state = initialState, action: ActionWithPayload) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             ...state,
//             counter: state.counter + 1,
//         }
//     }
//
//     if (action.type === 'ADD' && action.payload) {
//         return {
//             ...state,
//             counter: state.counter + action.payload,
//         }
//     }
//
//     return state;
// }
//
// const store = createStore(rootReducer);
// store.subscribe(() =>{
//     console.log('SUBS:', store.getState());
// });
//
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'ADD', payload: 10});


const App = () => {
    return (
        <div>
            <Counter/>
        </div>
    );
};

export default App;