
import React, { Component } from 'react';
import App from './app';

function main(){
    class Root extends Component{
        state:State;

        constructor(){
            super();
        }

        render(){
            return (
                <App />
            );
        }
    }
    return Root;
}

global.log=(...args)=>{
    console.log('------------------------------');
    console.log(...args);
    console.log('------------------------------');
    return args[args.length - 1];
};

module.exports=main;
