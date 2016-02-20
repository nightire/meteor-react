import React from 'react';
export * from './PostListLoading.jsx';

export const PostList = ({posts}) => (
  <section>
    <header>
      <h2>Post List</h2>
    </header>

    <ul>
      {
        posts.map(({_id, title}) => (
          <li key={_id}>
            <a href={FlowRouter.path('post', {_id})}>{title}</a>
          </li>
        ))
      }
    </ul>
  </section>
);
