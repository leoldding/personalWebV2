import React from 'react';

class Redirect extends React.Component {
    async componentDidMount() {
        window.location.replace(this.props.link);
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default Redirect;