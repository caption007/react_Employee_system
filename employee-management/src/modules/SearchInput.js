import React from 'react';

class SearchInput extends React.Component{
    render(){
        return(
            <input type='text' placeholder={"search for"+this.props.searchlist} ref="in" onChange={()=>this.props.search(this.props.searchlist,this.refs.in.value)}></input>
        );
    }
}
export default SearchInput;