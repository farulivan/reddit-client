import React from 'react';

export const Header = () => {
  return (
    <div className="flex justify-between items-center mt-7 mx-14">
      <span className="text-orange-600 font-bold text-lg">Popular</span>
      <form className="w-96">
        <label
          htmlFor="default-search"
          className="mb-2 text-xs font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search Reddit"
            required=""
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-2xl text-xs px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
