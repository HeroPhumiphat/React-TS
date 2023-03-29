import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addValue, clearValue, decrement, increment } from '../slice/counterSlice';
import { RootState } from '../store';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [newValue, setNewValue] = React.useState<number>(0)

    const onClickIncrement = () => {
        return dispatch(increment())
    }

    const onClickDecrement = () => {
        return dispatch(decrement())
    }

    const onClickClearValue = () => {
        return dispatch(clearValue())
    }

    const onSubmitForm = (event: any) => {
        event.preventDefault()

        dispatch(addValue(newValue))
        setNewValue(+'')
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <div className='space-x-2 space-y-1 mt-5'>
                <button onClick={onClickIncrement}>Increment</button>
                <button onClick={onClickDecrement}>Decrement</button>
                <button onClick={onClickClearValue}>ClearValue</button>
            </div>
            <div className='mt-5'>
                <form onSubmit={onSubmitForm}>
                    <input type="number" className={newValue === 0 ? 'py-2 pl-8 px-4 rounded-md w-24 text-center border-2 border-red-400 focus:border-green-400 focus:outline-none' : 'py-2 pl-8 px-4 rounded-md w-24 text-center border-2 border-green-400 focus:border-green-400 focus:outline-none'} value={newValue} min={0} onChange={e => setNewValue(+e.target.value)} placeholder='Please enter the Number?' />
                    <button className={newValue === 0 ? 'ml-4 text-red-400' : 'ml-4 text-green-400'} disabled={newValue === 0 ? true : false}>add new Value</button>
                </form>
            </div>
        </div>
    )
}

export default Counter;
