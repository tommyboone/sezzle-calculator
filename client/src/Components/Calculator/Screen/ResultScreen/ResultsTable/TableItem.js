import React, { Component } from 'react';
import API from '../../../../../utils/API';


class TableItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: []
        }
    };

    componentDidMount(){
        API.limit().then((response) => {
            this.setState({item: response.data})
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        const { item } = this.state

        return item.map((item) => ( 
           
            <li className="table-item">
                {item.equation} = {item.result}
            </li>
        )

        )
    }
}

// const TableItem = () => {
//     return(
//     <li className="table-item">

//     </li>
//     )
// }

export default TableItem;