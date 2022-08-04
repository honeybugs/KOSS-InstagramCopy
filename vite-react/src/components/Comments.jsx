function Comments({ comment }) {
  return (
    <div className=" pl-4 h-1/2 overflow-y-scroll space-y-2">
      {comment.map((it) => (
        <div>
          <p className=" font-extrabold">{it.name}</p>
          <p className=" pl-6">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

Comments.defaultProps = {
    comment : []
}
export default Comments;
