import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        // if (prevProps.counter.value != this.props.counter.value)
        //AXAJ call and get new data from the server

    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() {  
        console.log('Counter - rendered');
        const disabled =  this.props.counter.value === 0 ? true:false;
        return (
            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col-1">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div> 
                    <div class="col-3">
                        <button 
                            onClick={() => this.props.onIncrement(this.props.counter)} 
                            className='btn btn-secondary btn-sm'>
                            +
                        </button>

                        <button disabled={disabled}
                            onClick={() => this.props.onDecrement(this.props.counter)} 
                            className='btn btn-secondary m-2 btn-sm'>
                            -
                        </button>

                        <button 
                            onClick={() => this.props.onDelete(this.props.counter.id)} 
                            className="btn btn-danger btn-sm "
                        >
                            X
                        </button>
                    </div>
                </div> 
            </div> 
        );   

    }

    getBadgeClasses(){
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning":"primary";
        return classes;
    }

    formatCount(){
        return this.props.counter.value === 0 ? 'Zero': this.props.counter.value;
    }
}


export default Counter;
