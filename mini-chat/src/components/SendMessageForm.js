
class SendMessageForm extends React.Component{
   
    handleChange(e) {
        
        constructor() {
            super()
            this.state = {
               message: ''
            }
            this.handleChange = this.handleChange.bind(this)
        }


        this.setState({
          message: e.target.value
        })
      }
   
   
    render(){
        return(
            <form className= "send-message-form">
                <input 
                onChange ={this.handleChange}
                value = {this.state.message}
                placeholder="type the message and hit enter"
                type="text"
                />
            </form>
        )
    }
}

