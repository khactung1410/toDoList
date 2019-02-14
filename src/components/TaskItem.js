import React, { Component } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';

class TaskItem extends Component {

    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.task);
    }
    onDeleteItem = ()=>{
        this.props.onDeleteItem(this.props.task);
    }
    onEditTask = ()=>{
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
        // this.props.onEditItem(this.props.task.id);
    }
    render() {
        var {task , index} = this.props;
        console.log(task);
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
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
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
        tasks: state.tasks
    }
}
const mapDispatachToProps = (dispatch,props) =>{
    return {
        onDeleteItem: (task) => {
            dispatch(actions.deleteTask(task))
        },
        onUpdateStatus: (task) => {
            dispatch(actions.updateStatus(task))
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
}
export default connect(mapStateToProps,mapDispatachToProps)(TaskItem);