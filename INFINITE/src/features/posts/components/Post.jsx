import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';;
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [title, setTitle] = useState("Default Title sdfadsfdg");
  const [description, setDescription] = useState("Default Descriptionasdfffffffffff asdffffffffffff atgfaaaaaaaaaaadsfasdfsadfaf afaffdafjhakfhaisfud fasdfhaksfdj hasfhafkj asfdhadfhia akfdaskdjfh");

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleCommentDelete = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>

    
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="md:flex p-4">

          {/* <div className="md:flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full mx-4 my-2"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
          </div> */}

          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                  <h2 className="text-2xl font-bold mt-2">{title}</h2> 
               
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Name</div> */}
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                  <img
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt="Post content"
                    className="w-full h-auto mt-2"
                  />
                </p>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex items-center text-gray-500 hover:text-blue-500"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleOptions}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                    </svg>
                  </button>
                </div>
                {showOptions && (
                  <div
                    className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-white" role="menuitem">Edit Post</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white" role="menuitem">Delete Post</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className={`flex items-center ${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500`}
                onClick={handleLikeToggle}
              >
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 4.172a4 4 0 015.656 0L10 5.343l1.172-1.171a4 4 0 015.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Like
              </button>
              <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={() => setShowComments(!showComments)}
              >
                 
                <FontAwesomeIcon icon={faComment} className='mr-2'/>
                Comment
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-2">{isLiked ? '11 likes' : '10 likes'} · {comments.length} comments</div>

            {showComments && (
              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-2 border rounded mr-2"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <button
                    className="bg-blue-500 text-white p-2 rounded"
                    onClick={handleCommentSubmit}
                  >
                    Send
                  </button>
                </div>
                <div className="mt-4">
                  {comments.map((cmt, index) => (
                    <div key={index} className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://via.placeholder.com/150"
                            alt="User avatar"
                          />
                          <div className="ml-2">
                            <div className="text-sm font-semibold">User {index + 1}</div>
                            <div className="text-sm">{cmt}</div>
                          </div>
                        </div>

                        <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleCommentDelete(index)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button
        className="text-blue-500 hover:text-red-700"
        onClick={() => handleCommentDelete(index)}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="md:flex p-4">

          {/* <div className="md:flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full mx-4 my-2"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
          </div> */}

          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                  <h2 className="text-2xl font-bold mt-2">{title}</h2> 
               
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Name</div> */}
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                  <img
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt="Post content"
                    className="w-full h-auto mt-2"
                  />
                </p>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex items-center text-gray-500 hover:text-blue-500"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleOptions}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                    </svg>
                  </button>
                </div>
                {showOptions && (
                  <div
                    className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-white" role="menuitem">Edit Post</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white" role="menuitem">Delete Post</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className={`flex items-center ${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500`}
                onClick={handleLikeToggle}
              >
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 4.172a4 4 0 015.656 0L10 5.343l1.172-1.171a4 4 0 015.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Like
              </button>
              <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={() => setShowComments(!showComments)}
              >
                 
                <FontAwesomeIcon icon={faComment} className='mr-2'/>
                Comment
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-2">{isLiked ? '11 likes' : '10 likes'} · {comments.length} comments</div>

            {showComments && (
              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-2 border rounded mr-2"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <button
                    className="bg-blue-500 text-white p-2 rounded"
                    onClick={handleCommentSubmit}
                  >
                    Send
                  </button>
                </div>
                <div className="mt-4">
                  {comments.map((cmt, index) => (
                    <div key={index} className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://via.placeholder.com/150"
                            alt="User avatar"
                          />
                          <div className="ml-2">
                            <div className="text-sm font-semibold">User {index + 1}</div>
                            <div className="text-sm">{cmt}</div>
                          </div>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleCommentDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="md:flex p-4">

          {/* <div className="md:flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full mx-4 my-2"
              src="https://via.placeholder.com/150"
              alt="User avatar"
            />
          </div> */}

          <div className="w-full">
            <div className="flex justify-between items-center">
              <div>
                  <h2 className="text-2xl font-bold mt-2">{title}</h2> 
               
                {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Name</div> */}
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                  <img
                    src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    alt="Post content"
                    className="w-full h-auto mt-2"
                  />
                </p>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex items-center text-gray-500 hover:text-blue-500"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleOptions}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                    </svg>
                  </button>
                </div>
                {showOptions && (
                  <div
                    className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-white" role="menuitem">Edit Post</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white" role="menuitem">Delete Post</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className={`flex items-center ${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500`}
                onClick={handleLikeToggle}
              >
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 4.172a4 4 0 015.656 0L10 5.343l1.172-1.171a4 4 0 015.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                Like
              </button>
              <button
                className="flex items-center text-gray-500 hover:text-blue-500"
                onClick={() => setShowComments(!showComments)}
              >
                 
                <FontAwesomeIcon icon={faComment} className='mr-2'/>
                Comment
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-2">{isLiked ? '11 likes' : '10 likes'} · {comments.length} comments</div>

            {showComments && (
              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-2 border rounded mr-2"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <button
                    className="bg-blue-500 text-white p-2 rounded"
                    onClick={handleCommentSubmit}
                  >
                    Send
                  </button>
                </div>
                <div className="mt-4">
                  {comments.map((cmt, index) => (
                    <div key={index} className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://via.placeholder.com/150"
                            alt="User avatar"
                          />
                          <div className="ml-2">
                            <div className="text-sm font-semibold">User {index + 1}</div>
                            <div className="text-sm">{cmt}</div>
                          </div>
                        </div>


              


       




                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleCommentDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
