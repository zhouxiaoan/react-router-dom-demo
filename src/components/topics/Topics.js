import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Tip from './Tip'
class Topics extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    Topics
                </h1>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to={`${this.props.match.url}/rendering`}>{this.props.match.url}</Link></li>
                            <li><Link to={`${this.props.match.url}/components`}>组件</Link></li>
                            <li><Link to={`${this.props.match.url}/props-v-state`}>属性V状态</Link></li>
                        </ul>
                        <Route path={`${this.props.match.url}/:tipicId`} component={Tip}></Route>
                        <Route exact path={this.props.match.url} render={()=><h3>请选择一个主题</h3>}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Topics