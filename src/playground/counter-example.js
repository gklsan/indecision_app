let count=0;
const appRoot = document.getElementById("app_root");

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetBtn = () => {
    count=0
    renderCounterApp();
};
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id='increment_btn' className='button' onClick={addOne}>+1</button>
            <button id='decrement_btn' className='button' onClick={minusOne}>-1</button>
            <button id='reset_btn' className='button' onClick={resetBtn}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();