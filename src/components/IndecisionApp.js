import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => {
                return opt !== option;
            })
        }))
    };

    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        console.log(option);
        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter the value to add item in the option.';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    handleResetSelectedOption = () => {
      this.setState(() => ({selectedOption: undefined}));
    };


    render(){
        const subtitle = 'This is the subtitle of the Indecision Application';
        const options = JSON.parse(localStorage.getItem('options'));

        return(
            <div className='c-root'>
                <Header subtitle={subtitle}/>
                <div className='container c-bg-color'>
                    <Action hasOptions={ this.state.options.length > 0 } handlePick={this.handlePick} />
                    <div className='wedget'>
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={ this.state.selectedOption} handleResetSelectedOption={this.handleResetSelectedOption}/>
            </div>
        );
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
}

export default IndecisionApp;