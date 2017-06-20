function getName(name){
  alert(name);
}

var Vanle = React.createClass({
  addMember: function(){
    ++this.state.members;
    this.setState(this.state);
  },
  getInfo: function(){
    alert(this.props.children);
  },
  getInitialState(){
    return {
      members: this.props.members,
    };
  },
  render: function() {
    return(
      <div>
        <h1 className="yellow">Hello, {this.props.name}</h1>
        <div>
        Total members: {this.state.members}
        </div>
        <p> {this.props.children} </p>
        <button onClick={()=>{var str=this.props.name +' '+this.props.teacher; getName(str);}}>infor</button>
        <button onClick={this.addMember}>register</button>
        <Course />
        <InputTage />
      </div>
    );
  }
});
var Course = React.createClass({
  render: function(){
    return(
      <h2>Programing Reactjs</h2>
    )
  }
})

var InputTage = React.createClass({
  show: function(){
    var text = this.refs.sl.value;
    alert(text);
  },
  render: function(){
    return(
      <div>
        <select ref="sl">
        <option value="a">AAAA</option>
        <option value="b">BBBB</option>
        <option value="c">CCCC</option>
        </select>
        <input type="text" ref="txt"/>
        <button onClick={this.show}>Show</button>
      </div>
    );
  }
})

ReactDOM.render(
  <div>
    <Vanle name="Reactjs" teacher="A" members="10"> test test </Vanle>
    <Vanle name="Nodejs" teacher="B" members="20"> test2 test2 </Vanle>
  </div>
  ,document.getElementById("root")
);
