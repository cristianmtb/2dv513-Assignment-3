import React from 'react';
import BuildsList from './BuildsList';
import { getAllComputers } from '../../controllers/Network';

export default class Home extends React.Component{

    state = {
        loading: true
    }


    async componentDidMount(){
        this.setState({
            loading:false,
            computerList:await getAllComputers()
        })
    }

    render(){
        if(this.state.loading === true) return (<h1>Loading...</h1>)
        return(
            <div>
                <BuildsList build = {this.state.computerList}/>
            </div>
        )
    }
}