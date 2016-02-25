import React from 'react';
// import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
export * from './PostShowWarning.jsx';

export const PostShow = ({post}) => (
  <article>
    <a href={FlowRouter.path('blog')}>
      返回列表
    </a>

    <header>
      <h2>{post.title}</h2>
    </header>

    <section>
      <p>{post.content}</p>
    </section>
  </article>
);
