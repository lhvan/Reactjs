var list;
var Note = React.createClass({
  edit: function(){
    this.setState({
      onEdit: true
    });
  },
  cancel: function(){
    this.setState({
      onEdit: false
    });
  },
  save: function(){
    var item = this;
    $.post("/update", {note: this.props.id, info: this.refs.txt.value }, function(data) {
      list.setState({
        arr: data
      });
      item.setState({
        onEdit: false
      });
    });
  },

  getInitialState: function(){
    return {
      onEdit: false,
    }
  },

  delete: function(){
    $.post("/delete",{note: this.props.id}, function(data){
      list.setState({
        arr: data,
      })
    });
  },
  render: function(){
    if (this.state.onEdit) {
      return(
        <div className="note">
        <input defaultValue={this.props.children} ref="txt" />
        <button onClick={this.save}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        </div>
      );

    } else {
      return(
        <div className="note">
        <p>{this.props.children}</p>
        <button onClick={this.delete}>Delete</button>
        <button onClick={this.edit}>Edit</button>
        </div>
      );
    }
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
            return <Note key={index} id={index}>{note}</Note>
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
    // list.setState({
    //   arr: list.state.arr.concat(this.refs.txt.value)
    // });
    $.post("/add", {note: this.refs.txt.value},function(data) {
      list.setState({
        arr: data
      });
    })
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
