console.log('App.js is runnging!!!!!!');

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { options: [] };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {

            const options = JSON.parse(localStorage.getItem('options'));
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            alert('error1');
        }

    }

    componentWillUnmount() {
        console.log('Component will unmount....');
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length ) {
            const opt = JSON.stringify(this.state.options);
            localStorage.setItem('options', opt)
        }
    }


    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => {
                return opt !== option;
            })
        }))

    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        console.log(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter the value to add item in the option.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }


    render(){
        const subtitle = 'This is the subtitle of the Indecision Application';
        const options = JSON.parse(localStorage.getItem('options'));

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={ this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
            <h1> {props.title} </h1>
            { props.subtitle && (<h2> {props.subtitle} </h2>) }
        </div>
    );
};

// IndecisionApp.defaultProps = {
//     options: []
// };

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return(
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should i do?</button>
    )
};

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {props.options.length === 0 && <p>Please add option to getting started!!!</p>}
            <ol>
                { props.options.map((opt) => <Option key={opt} option={opt} handleDeleteOption={props.handleDeleteOption} />) }
            </ol>
        </div>
    )
};

const Option = (props) => {
    return(
        <li>
            <div key={props.option}> {props.option} </div>
            <button onClick={(e) => { props.handleDeleteOption(props.option)}}>Remove</button>
        </li>
    )
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = { error: undefined };
    }

    handleAddOption(e){
        e.preventDefault();
        const option =  e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return(
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app_root'));