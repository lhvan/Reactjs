var Com = React.createClass({
  addNum: function(){
    ++this.state.num;
    this.setState(this.state);
  },
  getInitialState: function(){
    return({
        num: 0,
      }
    );
  },
  render: function() {
    return(
      <button onClick={this.addNum}>hello {this.state.num}</button>
    );
  }
})



ReactDOM.render(
  <Com />
  ,document.getElementById("root")
);
