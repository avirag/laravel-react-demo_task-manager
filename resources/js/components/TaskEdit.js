import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            task: []
        };
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.put(`/tasks/${this.props.match.params.id}`, {
            name: this.state.name
        })
        .then(response => {
            this.props.history.push('/');
        });
    }

    getTask = () => {
        axios.get(`/tasks/${this.props.match.params.id}/edit`).then(response => this.setState({
            task: response.data.task,
            name: response.data.task.name
        }));
    };

    componentWillMount() {
        this.getTask();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>

                            <div className="card-body">
                                <form onSubmit={e => this.handleSubmit(e)}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={e => this.handleChange(e)}
                                            value={this.state.name}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Create a new task"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default TaskEdit;