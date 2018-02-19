class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
    }

    upCounter=(e)=>{
        e.preventDefault();
        this.setState(function(prevState){
            return {
                count: prevState.count +1
            }
        })

    }
    downCounter=(e)=>{
        e.preventDefault();

        this.setState(function(prevState){
            return {
                count:prevState.count-1
            }
        })

    }
    resetCounter=(e)=>{
        e.preventDefault();
        //resetea el contador a 0 
        this.setState({
            count:0
        })
    }

    render() {
        return(
            <div className="counter">
                <div className="counter">
                    {this.state.count}
                </div> 
                <div>
                    <button onClick={this.upCounter}>UP</button>
                    <button onClick={this.downCounter}>DOWN</button>
                    <button onClick={this.resetCounter}>RESET</button>
                </div>
            </div>
        )
    }


}

ReactDOM.render(<Counter />,
    document.getElementById('root'))