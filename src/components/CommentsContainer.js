import React from "react";
import CommentsList from "./CommentsList";

const CommentsData = [
  {name: "Pramod N", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
  {name: "Rohan P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [
    {name: "Vaibhav P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [
      {name: "Aditya J", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
      {name: "Prasad P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [
        {name: "Pramod N", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
        {name: "Mohit K", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
        {name: "Vaibhav P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []}
      ]}
    ]}
  ]},
  {name: "Prasad P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [
    {name: "Aditya J", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
    {name: "Pramod N", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
    {name: "Rohan P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [
      {name: "Vaibhav P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
      {name: "Mohit K", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: [{name: "Rohan P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []}]}
    ]}
  ]},
  {name: "Vaibhav P", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
  {name: "Aditya J", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []},
  {name: "Mohit K", text: "Lorem ipsum dolor sit amet, consectetur adipt", replies: []}
];

function CommentsContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={CommentsData} />
    </div>
  )
}

export default CommentsContainer;