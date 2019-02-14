import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskItem extends Component {

    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteItem = ()=>{
        console.log(this.props.task)
        this.props.onDeleteItem(this.props.task);
    }
    onEditItem = ()=>{
        this.props.onEditItem(this.props.task.id);
    }
    render() {
        var {task , index} = this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                        <span className={task.status===true?'label label-danger' : 'label label-success'} onClick={this.onUpdateStatus}>
                            {task.status===true?'Kích hoạt':'Ẩn'}
                        </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditItem}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick = {this.onDeleteItem}>
                        <span className="fa fa-trash mr-5" ></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatachToProps = (dispatach,props) =>{
    return {
        onDeleteItem: (task) => {
            dispatach(actions.deleteTask(task))
        }
    }
}
export default connect(mapStateToProps,mapDispatachToProps)(TaskItem);
