import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: '',
          tasks: []
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post('/tasks', {
            name: this.state.name
        })
        .then(response => {
            this.setState({
                tasks: [...this.state.tasks, response.data],
                name: ''
            });
        });
    }

    renderTasks = () => {
        return this.state.tasks.map(task => (
           <div key={task.id} className="media">
               <div className="media-body">
                   <div>
                       {task.name} <button className="btn btn-sm btn-warning float-right" onClick={() => this.handleDelete(task.id)}>Delete</button>
                   </div>
               </div>
           </div>
        ));
    };

    getTasks = () => {
        axios.get('/tasks').then(response => this.setState({
            tasks: [...response.data.tasks]
        }));
    };

    componentWillMount() {
        this.getTasks();
    }

    handleDelete = id => {
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({
            tasks: updatedTasks
        });

        axios.delete(`/tasks/${id}`);
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

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

                                <hr/>

                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;