import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Post submitted successfully!');
    // Reset form fields
    setTitle('');
    setImage('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New Post</h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full  border border-solid rounded-mdshadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold">Image</label>
          <input type="file" id="image" value={image} onChange={(e) => setImage(e.target.value)} required className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold ">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-4 border border-solid"></textarea>
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
