import React from "react";
import Comment from "./Comment";

function CommentsList({comments}) {
  // Disclaimer: Don't use Indexes as Keys
  return comments.map((comment, index) => <div key={index}><Comment data={comment} /><div className="pl-5 border border-l-black ml-5"><CommentsList comments={comment.replies} /></div></div>);
}

export default CommentsList;