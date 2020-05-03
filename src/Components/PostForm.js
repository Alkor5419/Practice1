import React from 'react';
import {connect} from 'react-redux';
import {createPost} from '../Redux/actions';
class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state;

        const newPost = {
            title, id: Date.now().toString()
        };
        this.props.createPost(newPost);
        this.setState({title:''});
    }

    changeInputHandler = event => {
        event.persist();
        this.setState( prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}));
    }

    render() {
        return (
        <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label for="title">Заголовок поста</label>
                <input 
                type="text"
                class="form-control" 
                id="title"
                name = "title"
                value = {this.state.title}
                onChange = {this.changeInputHandler} />
            </div>
            <button type="submit" className = 'btn btn-success'>Создать</button>
        </form>
        );
    }
}

const mapDispatchToProps = {
    createPost
};

export default connect(null,mapDispatchToProps)(PostForm);