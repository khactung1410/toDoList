import React, { Component } from 'react';
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

class TaskControl extends Component {
    render() {
        return (
            <div>
                {/*Search*/}
                <TaskSearchControl onSearch={this.props.onSearch}/>
                {/*Sort*/}
                <TaskSortControl onSort = {this.props.onSort}/>
            </div>
        );
    }
}

export default TaskControl;
