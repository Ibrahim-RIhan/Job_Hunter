import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-purple-600 text-center text-7xl font-semibold mt-7'>Blogs about Ques and Answers !!!! </h1>
            <hr className='text-black my-10' />
            <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                <h2 className='text-5xl font-bold text-center  text-red-600 mb-5'> When should you use context API?</h2>
                <p className='text-3xl font-semibold leading-normal  text-gray-950'>
                    The Context API in React is useful when you have data that needs to be shared across multiple components, and passing this data through props would be cumbersome or impractical. It's commonly used for managing global state, such as themes, user authentication, language and localization, and global settings. However, it's important to use it judiciously and only when it makes sense for your specific use case.
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300'>
                <h2 className='text-5xl font-bold text-center  text-red-600 mb-5'> What is a custom hook?</h2>
                <p className='text-3xl font-semibold leading-normal  text-gray-950'>
                    A custom hook is a reusable function in React that contains some logic and state, and can be shared across multiple components in an application. Custom hooks allow you to abstract away complex or repetitive logic into a single place, making your code more modular and easier to maintain.

                    Custom hooks are created by prefixing a function name with the word "use". By convention, custom hooks should start with a capital letter to distinguish them from regular functions. Custom hooks can use built-in hooks like useState, useEffect, useContext, or other custom hooks, just like regular components.
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300 '>
                <h2 className='text-5xl font-bold text-center  text-red-600 mb-5'>What is useRef?</h2>
                <p className='text-3xl font-semibold leading-normal  text-gray-950'>
                    In React, useRef is a hook that allows you to create a mutable reference that can persist between renders of a component. The useRef hook returns an object with a current property that you can use to store and access a value. Unlike useState, updating the current property of a useRef object does not trigger a re-render of the component.

                    One common use case for useRef is to access and manipulate a DOM element or a child component from a parent component.
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7  hover:bg-green-300 '>
                <h2 className='text-5xl font-bold text-center  text-red-600 mb-5'>What is useMemo?</h2>
                <p className='text-3xl font-semibold leading-normal  text-gray-950'>
                    In React, useMemo is a hook that allows you to memoize a value or a function, which means that it will only be re-computed when one of its dependencies has changed. This can improve the performance of your application by avoiding unnecessary re-computations.

                    The useMemo hook takes two arguments: a function that computes the memoized value, and an array of dependencies that determine when the memoized value should be re-computed. If any of the dependencies have changed since the last render, the function will be re-called to compute the new value. If none of the dependencies have changed, the previous memoized value will be returned.
                </p>
            </div>
        </div>
    );
};

export default Blogs;