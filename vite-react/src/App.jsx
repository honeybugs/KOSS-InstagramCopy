import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "./components/Comments";
import Like from "./components/Like";

const ImageUrl =
  "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_960.jpg";
const Author = "권세건";
const Text = "자연과 함께 하는 삶";
const CommentButton = (
  <svg
    aria-label="댓글 달기"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
    ></path>
  </svg>
);
const ShareButton = (
  <svg
    aria-label="게시물 공유"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <line
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
      x1="22"
      x2="9.218"
      y1="3"
      y2="10.083"
    ></line>
    <polygon
      fill="none"
      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="2"
    ></polygon>
  </svg>
);
const BookMarkButton = (
  <svg
    aria-label="저장"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></polygon>
  </svg>
);

function App() {
  const [comments, setComments] = useState([]);
  const [uploadPossible, setuploadPossible] = useState(false);
  const [commentInput, setcommentInput] = useState("");
  const AddComment = (e) => {
    if (!commentInput) return window.alert("댓글 넣으셈");
    setComments([...comments, { name: Author, body: commentInput }]);
    setcommentInput("");
  };
  const CommentChange = (e) => {
    setcommentInput(e.target.value);
    if (e.target.value) setuploadPossible(true);
    else setuploadPossible(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => console.log(setComments(data)));
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
      <div className=" w-full h-full px-40 py-20 flex flex-row">
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            src={ImageUrl}
            alt="image"
          />
        </div>
        <div className="w-1/2 bg-white h-full">
          <div className=" p-2 border-b-slate-200 border-b-2">{Author}</div>
          <div className=" p-4">
            <p className=" font-bold">{Author}</p>
            <p className="pl-4">{Text}</p>
          </div>
          <Comments comment={comments} />
          <div>
            <header className="flex flex-row justify-between border-t-2 border-b-slate-200">
              <div className=" items-center p-3 pb-0 flex flex-row space-x-1">
                <Like />
                {CommentButton}
                {ShareButton}
              </div>
              <div className="p-3">{BookMarkButton}</div>
            </header>
            <div className=" pl-4 -mt-2 border-b-2 border-b-slate-200">
              100,00개 좋아요
            </div>
            <div className="flex flex-row px-2 justify-center items-center space-x-2 py-3">
              <input
                value={commentInput}
                onChange={CommentChange}
                className=" w-10/12"
              ></input>
              <button
                onClick={AddComment}
                className={` w-10 text-lg ${
                  uploadPossible ? "text-blue-500" : "text-blue-300"
                }`}
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
