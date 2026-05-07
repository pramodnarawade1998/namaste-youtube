import React from 'react';

function ChatMessage({name, message}) {
  return (
    <div className="flex items-center">
      <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dNYjy1R6m0kiKQH2cIQhkdeVHCECxvVJKw&s"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
