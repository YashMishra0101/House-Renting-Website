import React from 'react';
import Footer from '../componet/Footer';
import blog from "./../assets/blog.gif";

export const Blog = () => {
  // Sample data for blog posts
  const posts = [
    {
      id: 1,
      title: 'Tips for Finding Affordable Accommodation in a New City',
      author: 'Nidhi ghanghare',
      date: 'April 15, 2024',
      content:
        'Moving to a new city can be exciting, but finding affordable accommodation...',
    },
    {
      id: 2,
      title: 'How to Make Your Rental Room Feel Like Home',
      author: 'Ruhi sharma',
      date: 'April 12, 2024',
      content:
        'Living in a rental room doesn\'t mean you can\'t make it feel like home...',
    },
    {
      id: 3,
      title: 'Exploring the Best Neighborhoods for Students in Your City',
      author: 'Minakshi Raut',
      date: 'April 10, 2024',
      content:
        'As a student, choosing the right neighborhood to live in can greatly...',
    },
  ];

  return (
    <>
    <div className="container mx-auto py-8">
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold ">RoomQuest Blog</h1>
      <p className="text-gray-600">Welcome to the RoomQuest blog. Explore our latest posts below.</p>
    </header>
    <img src={blog} className='m-auto w-28 mb-7'/>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border p-4">
        <h2 className="text-xl font-bold mb-2">{posts[0].title}</h2>
        <p className="text-gray-600 mb-2">{posts[0].content.substring(0, 150)}...</p>
        <a href={`/blog/${posts[0].id}`} className="text-blue-500 hover:underline">Read more</a>
      </div>
      <div className="border p-4">
        <h2 className="text-xl font-bold mb-2">{posts[1].title}</h2>
        <p className="text-gray-600 mb-2">{posts[1].content.substring(0, 150)}...</p>
        <a href={`/blog/${posts[1].id}`} className="text-blue-500 hover:underline">Read more</a>
      </div>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Recent Posts</h2>
      {posts.slice(2, 4).map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-2">{post.author} | {post.date}</p>
          <p className="text-gray-600 mb-2">{post.content.substring(0, 100)}...</p>
          <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read more</a>
        </div>
      ))}
    </section>
   
   </div>
     <Footer/>
     </>
  );
};

