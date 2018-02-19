class Hello extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nombre:"Carlos"
        }
    }

    despedirse = ()=>{
        this.setState({
            nombre:"alexis"
        })
    }

    render(){
        return (
            <h1 onClick={this.despedirse}>{this.state.nombre}</h1>
        )
    }
}

ReactDOM.render(<Hello />,
    document.getElementById('root'))