import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

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

export default IndecisionApp;