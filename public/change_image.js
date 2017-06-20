var Album = React.createClass({
  nextNum: function() {
    this.state.num == 6 ? 6 : ++this.state.num;
    this.setState(this.state);
  },
  prevNum: function() {
    this.state.num == 1 ? 1 : --this.state.num;
    this.setState(this.state);
  },
  getInitialState: function(){
    return({
      num: 1,
    });
  },
  render: function() {
    return(
      <div>
        <img src={"images/0"+this.state.num+".png"} />
        <hr />
        <button onClick={this.prevNum}>Prev</button>
        <button onClick={this.nextNum}>Next</button>
      </div>
    );
  }
})

ReactDOM.render(
  <Album />
  ,document.getElementById("root")
);
