import React,{Component}from 'react'
 
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {searchText:"",
        placeHolder:"Rechercher un film...",
        intervalBeforeRequest:1000,
        lockRequest:false}
    }
    render(){
        return (
        <div className="row">    
            <div className="col-lg-8">  
                <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeHolder}/>
            </div>
        </div>    

        )
    }
    handleChange(e){
        this.setState({searchText:e.target.value})
        if (!this.state.lockRequest){
            this.setState({lockRequest:true})
            setTimeout(function(){this.search(this.state.searchText)}.bind(this),this.state.intervalBeforeRequest)

        }
    }
   
    search(){
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})
    }

}

export default SearchBar;