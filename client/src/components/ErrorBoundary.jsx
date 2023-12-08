import { Component } from "react";

export default class ErrorBoundary extends Component(){
    constructor(){
        super();

        this.state ={
            hasError:false
        }
    }

    static GetDerivedStateFromError(err){
        console.log('GetDerivedStateFromError');
        return{
            hasError:true
        }
    }

    componentDidCatch(error,errorInfo){
        console.log('ComponentDidCatch');
    }

    render(){
        if(this.state.hasError){
            return <h1>404</h1>
        }

        return this.props.children
    }
}