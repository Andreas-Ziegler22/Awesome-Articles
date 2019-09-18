import React from 'react';
import ToDoItem from './ToDoItem';

class ArticleList extends React.Component {
  render() {
    return (

      <div className="todo-list">
        <ul className="todo-items">
          {Object.keys(this.props.items).map(uuid => (
            <ToDoItem key={`todo-item-${uuid}`} data={this.props.items[uuid]} />
          ))}
        </ul>
      </div>

    );
  }
}

export default ArticleList;
