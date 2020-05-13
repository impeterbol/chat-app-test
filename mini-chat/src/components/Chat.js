import React, { Component } from 'react';
import Title from './Title'

class Chat extends React.Component{
constructor(){
    super()
    this.state={
        messages: DUMMY_DATA
    }
}

componentDidMount(){
    const chatManager = new ChatKit.ChatManager({
        instancelocator:instancelocator,
        userId:username,
        tokenProvider: new Chatkit.TokenProvider({
            url:testToken
        })
    })

chatManager.connect()
.then (currentUser =>{
    currentUser.subscribeToRoom({
        roomId:roomId,
        hooks:{
            oneNewMessage: message => {
                this.setState({
                    messages:[...this.state.messages, message]
                })
            }
        }
    })
})
}


sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    })
  }
    render(){
        return(
            <div className='chat'>
                 <Title/>
      <MessageList messages={this.state.messages}/>
      <SendMessageForm sendMessage = {this.sendMessage}/>
      

            </div>
        )
    }
}





//dummy data to check the data flow

// const DUMMY_DATA = [
//     {
//       senderId: "perborgen",
//       text: "who'll win?"
//     },
//     {
//       senderId: "janedoe",
//       text: "who'll win?"
//     }
//   ]