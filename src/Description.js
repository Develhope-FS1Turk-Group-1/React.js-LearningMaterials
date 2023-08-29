import React from "react";


class Description extends React.Component{
    constructor(props){
        super();
        this.props = props;

        console.log(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>
                    {
                    this.props.age > 23 ? <a href={this.props.url}>Linkedin</a> : "You are younger"
                    }
                </h2>
                <h3>{this.props.email}</h3>
            </div>
        );
    }
}

Description.defaultProps = {
    name: 'Rahul',
    url: 'deepblue',
    age: '45',
};

export default Description;