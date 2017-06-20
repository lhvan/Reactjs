var Note = React.createClass({
  render: function(){
    return(
      <p>{this.props.children}</p>
    );
  }
});

var List = React.createClass({
  add: function() {
    this.state.arr.push("Nodejs", "Reactjs");
    this.setState(this.state);
  },
  getInitialState: function(){
    return {
      arr: ["A", "B", "C"],
    }
  },
  render: function(){
    return(
      <div>
      <button onClick={this.add}>Add</button>
       {this.state.arr.map(function(note, index){
         return <Note key={index}>{note}</Note>
       })}
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <List />
  </div>
  ,document.getElementById("root")
);
