class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { count: 0 }
    }

    componentDidMount(){
        try {
            const count = parseInt(localStorage.getItem('count'));
            if (!isNaN(count)) {
                this.setState(() => ({count}));
            }
        } catch (e) {
            alert('error msg')
        }
    }

    componentWillUnmount(){

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const json = parseInt(this.state.count);
            localStorage.setItem('count', json);
        }

    }

    handleAddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));

    }

    handleMinusOne(prevState) {
        this.setState((prevState) => ({ count: prevState.count -= 1 }));
    }

    handleReset() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter/>, document.getElementById('app_root'))

// let count=0;
// const appRoot = document.getElementById("app_root");
//
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
//
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const resetBtn = () => {
//     count=0
//     renderCounterApp();
// };
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id='increment_btn' className='button' onClick={addOne}>+1</button>
//             <button id='decrement_btn' className='button' onClick={minusOne}>-1</button>
//             <button id='reset_btn' className='button' onClick={resetBtn}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();