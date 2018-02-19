"use strict"
class CountVisits extends React.Component{ 
    constructor(){
        super()

        this.state = {
            visits:0,
            visitsmult:0,
            visitsdiv:0,
        }
    }

    calc =()=>{
        this.setState(()=>{
            return {
                visits:this.state.visits+1,
                visitsmult:this.state.visits*2,
                visitsdiv:this.state.visits/2,
            }
        })
    }

    render() { 
        return (
        <div>
            <h2 className="header">WELCOME TO REACTS</h2>
            <button onClick={this.calc} >ESTO ES UN BOTON</button>
            <p>{this.state.visits}</p>
            <p>{this.state.visitsmult}</p>
            <p>{this.state.visitsdiv}</p>
        </div>
        )
    }   
}


ReactDOM.render(<CountVisits />,
    document.getElementById('root'))