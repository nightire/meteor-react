import React, {Component} from 'react';
// import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
export * from './PostListLoading.jsx';

/**
 * PostList 组件用于渲染 Posts 列表
 */
export default class PostList extends Component {
  /**
   * 组件构造器
   * @param {object} params - `this.props`
   */
  constructor() {
    super();
  }

  /**
   * @private
   */
  render() {
    return (
      <section>
        <header>
          <h2>Post List</h2>
        </header>

        <ul>{this.props.posts.map(this.renderPostEntry)}</ul>
      </section>
    );
  }

  /**
   * 渲染单独的 *Post Entry*，用于抽象列表渲染逻辑
   *
   * ```
   * <ul>{this.props.posts.map(this.renderPostEntry)}</ul>
   * ```
   *
   * @param {object} post - `post` 对象。解构使用 `_id` 和 `title` 两个 fields.
   * @return {PostEntry} 一个 `PostEntry` 组件
   */
  renderPostEntry({_id, title}) {
    return <li key={_id}>
      <a href={FlowRouter.path('post', {_id})}>{title}</a>
    </li>;
  }
}
