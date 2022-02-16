import React, { Component } from 'react';
class List extends Component {
    render() {
        return (
            <div className='list'>
                <li >{this.props.value}</li>
                <div>
                    <span className='delete' onClick={() => { this.props.sendData(this.props.id) }}>X</span>
                </div>
            </div>
        )
    }
}

export default List;