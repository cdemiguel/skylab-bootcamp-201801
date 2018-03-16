"use strict";
var game;
class Hangman extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHangSart: true,
            showHangInsertWord: false,

            attemps: "10",
            cadena:"",
            game: {}
        }

    }

    onHangStart = (e) => {
        this.setState({ showHangSart: false })
        this.setState({ showHangInsertWord: true })
    }

    addInput = (word, attemps) => {

        this.setState({ showHangInsertWord: false })
        this.setState({ showHangInsertletter: true })


        const game = new HangmanGame(word, 10)
        
        this.setState({ game })


    }

    onAddLetter = (letter) => {

        var tried = this.state.game.try(letter)

        
        this.setState({
            attemps: tried.attemps,
            cadena: tried.cadena
        })

        console.log(this.state.attemps)
        console.log(this.state.cadena)



    }






    render() {
        return <div>

            {this.state.showHangSart ? <HangStart onHangStart={this.onHangStart} /> : null}

            {this.state.showHangInsertWord ? <HangInsertWord onAddInput={this.addInput}     /> : null}

            {this.state.showHangInsertletter ? <HangPlay onAddLetter={this.onAddLetter} attemps={this.state.attemps} /> : null}

            <FinishGame />

        </div>

    }
}

function HangStart(props) {
    return <section className="section-start">
        <div className="subsection-start">
            <button onClick={props.onHangStart} id="play"><a>Play</a></button>
        </div>
    </section>
}

class HangInsertWord extends React.Component {

    constructor() {
        super()

        this.state = {
            input: ''
        }

    }

    keepInput = e => this.setState({ input: e.target.value })

    addInput = () => {
        this.props.onAddInput(this.state.input, 10)
    }

    render() {
        return <section className="section-data">
            <div className="subsection-data">
                <div>
                    <p><span>You have </span><span id="nattemps" className="nattemps">10</span><span> attemps</span></p>
                    <ul>
                    </ul>
                </div>
                <div>
                    <form onSubmit={e => {
                        e.preventDefault()
                        this.addInput()
                    }}>
                        <label>Enter a word</label>
                        <input type="text" className="round-blue-input" onChange={this.keepInput} value={this.state.input} />
                        <button id="try"><a>Go!!</a></button>
                    </form>
                </div>
            </div>
        </section>
    }

}

class HangPlay extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            letter: ""
        }
    }

    keepInput = e => this.setState({ letter: e.target.value })

    addLetter = () => {
        this.props.onAddLetter(this.state.letter)
    }

    render(props) {
        return <section className="section-word">
            <div className="subsection-word">

                <ul><li>{this.props.attemps}</li></ul>



                <form onSubmit={e => {
                    e.preventDefault()
                    this.addLetter()
                }}>
                    <label>Enter letter</label>
                    <input onChange={this.keepInput} value={this.state.input} type="text" id="word" />
                    <button id="go"><a>Go!!</a></button>
                </form>
            </div>
        </section>
    }
}


function FinishGame(props) {

    return <section className="section-end">
        <div className="subsection-end">
            <p className="win">
                <span>YOU WIN!</span>
                <span> Your word is:</span>
                <span className="final_msg bold" />
                <span>Number of total attemps: </span><span className="bold">3</span>
            </p>
            <p className="lose">YOU LOOSE!</p>
            <div className="button-playagain">
                <button><a>Play Again!!!</a></button>
            </div>
        </div>
    </section>

}

// for (var i =0; i<word.length; i++){
//     $('ul').append('<li>_</li>');
// }














ReactDOM.render(<Hangman />,
    document.getElementById('root'))