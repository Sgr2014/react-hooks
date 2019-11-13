import React, { Component } from 'react'
// React.component与Component有啥关系
export default class ClockComponent extends Component {
  constructor(props) {
    super(props)
    // 在构造函数中初始化状态
    this.state = {
      date: new Date(),
      count: 0
    }
  }
  componentDidMount() {
    // this.timerId = setInterval(() => {
    //   this.setState({
    //     date: new Date()
    //   })
    // }, 1000)

    // setState是异步的
    // this.setState({count: 1}, () => {
    //   console.log(this.state.count) // 1
    // })

    // setTimeout(()=> {
    //   this.setState({count: 1})
    //   console.log(this.state.count, 'setTimeout') // 1
    // }, 1000)

    // setInterval(()=> {
    //   this.setState({count: 1})
    //   console.log(this.state.count, 'setTimeout')
    // }, 1000)
  }
  componentWillUnmount() {
    // 组件卸载前清除定时器
    // clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}