import { default as React } from 'react';
import { default as Form  } from '../form';
import { default as Button } from '../button';
import { default as RadioGroup } from 'react-radio-group';
import { default as LinkedStateMixin } from 'react-addons-linked-state-mixin'

import { default as ProgressBar } from '../progressbar';

export default React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState(){
    return{
      name: "",
      image:"",
      genre: "",
      rate: "",
      system: "",
      platform: "",
      completion: "",
      review: "",
      dlc: "",
      tags: "",
      isPC: "hide",
      isConsole: "hide",
      isComplete: "hide"
    };
  },
  handleHidden: function(value){
    console.log(value);
    if(value=="PC"){
      this.setState({
        isConsole: "hide",
        isPC: "seen"
      });
    }
    if(value=="Console"){
      this.setState({
        isConsole:"seen",
        isPC: "hide"
      });
    }
    this.setState({
      system: value
    });
  },
  handleComplete: function(value){
    if(value != "notComplete"){
      this.setState({
        isComplete: "seen"
      });
    }
    else {
      this.setState({
        isComplete: "hidden"
      });
    }
    this.setState({
      complete:value
    });
  },
  handleChangePlatform: function(value) {
    this.setState({
      platform: value,
    });
  },
  handleChangeSystem: function(value) {
    this.setState({
      system: value,
    });
  },
  handleChangeCompletion: function(value){
    this.setState({
      completion: value
    });
  },
  onSubmit: function(){
    console.log("asd");
  },
  render(){
    return(
      <Form onSubmit={this.onSubmit} >
        <ProgressBar />
        <section>
          <div className="basic_inf">
            <h3>Please enter basic game info</h3>
            <br />
            <label> Name </label>
            <input type="text" valueLink={this.linkState('name')} id="form-name" placeholder="Please enter game name" maxLength="50" required/>
            <br />
            <label> Thumbnail </label>
            <input type="file" valueLink={this.linkState('image')} id="form-image" required accept="image/*"/>
            <br />
            <label> Genre </label>
            <input type="text" valueLink={this.linkState('genre')} id="form-genre" placeholder="Action,adventure,horror..."/>
            <br />
            <label> Rating </label>
            <input type="number" valueLink={this.linkState('rate')} id="form-rate" placeholder="0" max="5" min="0"/>

          </div>
        </section>
        <section>
          <div className="platform_inf">
            <h3>Please select system:</h3>
            <br />
              <RadioGroup name="system" selectedValue={this.state.system} onChange={this.handleChangeSystem} onChange={this.handleHidden}>
                {Radio => (
                  <div>
                    <Radio value="PC" />PC
                    <Radio value="Console" />Console
                  </div>
                )}
              </RadioGroup>
          </div>

          <div className="platform_spec">
            <RadioGroup name="platform_pc" selectedValue={this.state.platform} onChange={this.handleChangePlatform}>
              {Radio => (
                <div id={this.state.isPC}>
                  <Radio value="Origin" /> Origin
                  <Radio value="Steam" /> Steam
                  <Radio value="GOG" /> GoG
                  <Radio value="Physical" /> Physical
                </div>
              )}
            </RadioGroup>
            <RadioGroup name="platform_con" selectedValue={this.state.platform} onChange={this.handleChangePlatform} onClick={this.handleHidden}>
              {Radio => (
                <div id={this.state.isConsole}>
                  <Radio value="Playstation" /> Playstation
                  <Radio value="Xbox" /> Xbox
                  <Radio value="Nintendo" /> Nintendo
                </div>
              )}
            </RadioGroup>
          </div>
          </section>
          <section>
          <div className="comp">
            <h3>Is the game complete, given up or not complete / not played?</h3>
            <br/>
            <RadioGroup name="platform_pc" selectedValue={this.state.complete} onChange={this.handleChangeCompletion} onChange={this.handleComplete}>
              {Radio => (
                <div>
                  <Radio value="complete" /> Complete
                  <Radio value="notComplete" /> Not Complete/Have not played
                  <Radio value="givenUp" /> Given up
                </div>
              )}
            </RadioGroup>
            <div className="comp_add" id={this.state.isComplete}>
              <h3>Please add a short review, tags for the game and any relevant story-dlc you have completed</h3>
              <label>Review:</label>
              <input type="text" valueLink={this.linkState('review')} maxLength="50"/>
              <br/>
              <label>DLC:</label>
              <input type="text" valueLink={this.linkState('dlc')}  maxLength="50"/>
              <br/>
              <label>Tags:</label>
              <input type="text" valueLink={this.linkState('tags')} maxLength="20"/>
            </div>
          </div>
        </section>
        <section>
          <div className="controls">
            <Button className="exit"> Cancel </Button>
            <input type="submit" value="save"/>
          </div>
        </section>
      </Form>
    );
  }
});
