let names =['Ayjemal','Sara','Mustafa','Begench']
let html = [<h2 key="1">Congratulation</h2>,<h3 key="2">React is Awsome</h3>]


  class HelloMessage extends React.Component {
    render() {
        return (
            <div>
               
      <HelloNames sara={names}/>  
 
               'Hello from Component'

               <div>
                   {this.props.ayjemal}
                   </div> 
            </div>
        )
    }
}

function App(){
    return (<div>
         <HelloMessage ayjemal={html}/>
        <h2>Hello from Function</h2> 
        </div>)
}


 class HelloNames extends React.Component {

    static propTypes = { sara: PropTypes.array.isRequired }
 
    render() {
        return (
            <div>
                
                <NoteList mikail={this.props.sara.map(function(element,item){
                console.log(item,element)
return <p key={item}>{element}</p>
})}/>
</div>
   
        )
    }
}

class NoteList extends React.Component{
    render(){
        return(
            <div>
            <ol>
        {this.props.mikail.map((element,item) => {
            console.log(item,element)
            
            return <li key={item} className={item === 0 ? 'first' : item === 1 ? 'second' : item === 2 ? 'third' : ''}>{element}</li>
            })}

            </ol>
    </div>

                
        )
    }
}

ReactDOM.render(<div className='card'>
    
    <App/>
    </div>,document.getElementById('root'))

   