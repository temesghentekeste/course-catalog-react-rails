import React, { Component } from 'react';
import ActiveItem from './ActiveItem';
import Item from './Item';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleVideoChange = this.props.handleVideoChange;
    const items = this.props.course_modules.map((data) => {
      return data.active ? (
        <ActiveItem
          key={data.id}
          title={data.title}
          description={data.description}
          handleVideoChange={handleVideoChange}
        />
      ) : (
        <Item
          key={data.id}
          title={data.title}
          description={data.description}
          handleVideoChange={handleVideoChange}
        />
      );
    });
    return (
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">React For Rails Developers - Videos</h2>
          </div>
          {items}
        </div>
      </div>
    );
  }
}

export default Table;
