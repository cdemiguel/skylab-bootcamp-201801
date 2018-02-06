'use strict';
var helloWorld = "aloha!"
function salutation(){
    console.log(helloWorld)
    return helloWorld
}
function salute(){
    alert(helloWorld)
}

ReactDOM.render(
    <main>
        <section>
            {salutation()}
            <h1>hola mundo</h1>
        </section>
    </main>,
    document.getElementById('root')
)