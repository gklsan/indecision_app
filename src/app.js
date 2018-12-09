console.log('App.js is runnging!!!!!!');

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { options: [] };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => { return{ options: [] } });
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

        this.setState((prevState) => {
            return { options: prevState.options.concat([option]) }
        });
    }


    render(){
        const title = 'Indecision App';
        const subtitle = 'This is the subtitle of the Indecision Application';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={ this.state.options.length > 0 } handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return(
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
        )
    }
}

class Options extends React.Component {
    render(props){
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove All </button>
                <ol>
                    { this.props.options.map((opt) => <Option key={opt} option={opt} />) }
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render(props){
        return(<li key={this.props.option}> {this.props.option} </li>)
    }
}

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
        e.target.elements.option.value = '';
        this.setState(() => { return { error: error } });
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