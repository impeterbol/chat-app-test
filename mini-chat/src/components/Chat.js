import React from 'react';

class Chat extends React.Component{
constructor(){
    super()
    this.state={
        messages: DUMMY_DATA
    }
}


    render(){
        return(
            <div className='chat'>
                 <Title/>
      <MessageList messages={this.state.messages}/>
      <SendMessageForm/>
      

            </div>
        )
    }
}


//dummy data to check the data flow

const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      text: "who'll win?"
    }
  ]