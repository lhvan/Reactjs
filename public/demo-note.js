var list;
var Note = React.createClass({
  render: function(){
    return(
      <div className="note">
        {this.props.children}
      </div>
    );
  }
});
function addNote(){
  ReactDOM.render(
    <InputNote />
    ,document.getElementById("id-add")
  );

}
var List = React.createClass({
  getInitialState: function(){
    list = this;
    return {
      arr: [],
    }
  },
  render: function(){
    return(
      <div className="list">
        <div id="id-add"></div>
        <button onClick={addNote}>Add</button>
        {
          this.state.arr.map(function(note, index){
            return <Note key={index}>{note}</Note>
          })
        }
      </div>
    )
  },
  componentDidMount: function(){
    var that = this;
    $.post("/getNotes", function(data){
      that.setState({
        arr: data
      })
    });
  }

});

var InputNote = React.createClass({
  send: function(){
    list.setState({
      arr: list.state.arr.concat(this.refs.txt.value)
    });
    ReactDOM.unmountComponentAtNode(document.getElementById("id-add"));
  },
  render: function(){
    return(
      <div>
      <input type="text" ref="txt" placeholder="Enter your note!"/>
      <button onClick={this.send}>Save</button>
      </div>
    )
  }
});

ReactDOM.render(
  <div>
    <List />
  </div>
  ,document.getElementById("root")
);
