var Album = React.createClass({

  changeImage: function(){
    this.state.num = (this.state.num % 6) + 1;
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
      </div>
    );
  },
  componentDidMount(){
    setInterval(this.changeImage,1000)
  }
})

ReactDOM.render(
  <Album />
  ,document.getElementById("root")
);
