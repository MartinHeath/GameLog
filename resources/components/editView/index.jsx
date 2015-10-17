import { default as React } from 'react';
import { default as Form  } from '../form';
import { default as Button } from '../button'

export default React.createClass({
  render(){
    return(
      <Form>
        <section>
          <div className="basic_inf">
            <h3>Please enter basic game info</h3>
            <label for="form-name"> Name </label>
            <input type="text" id="form-name" placeholder="Please enter game name" maxlength="50" required />
            <br />
            <br />
            <label for="form-image"> Thumbnail </label>
            <input type="file" id="form-image" value="Enter thumbnail" required accept="image/*"/>
            <br />
            <label for="form-image"> Genre </label>
            <input type="text" id="form-genre" placeholder="Action,adventure,horror..." required/>
            <br />
            <label for="form-image"> Rating </label>
            <input type="number" id="form-rate" placeholder="0" max="5" min="0"/>

          </div>
        </section>
        <section>
          <div className="platform_inf">
            <h3>Please select platform</h3>
            <br />
            PC <input type="radio" name="platform" value="pc" Required />
            Console <input type="radio" name="platform" value="console" Required />
          </div>

          <div className="platform_spec">
            Steam <input type="radio" name="pc" value="steam" Required />
            Origin <input type="radio" name="pc" value="origin" Required />
            GOG <input type="radio" name="pc" value="gog" Required />
            Physical <input type="radio" name="pc" value="phys" Required />
            <br />
            Xbox <input type="radio" name="console" value="box" Required />
            Playstation <input type="radio" name="console" value="ps" Required />
            Wii <input type="radio" name="console" value="wii" Required />
            Other <input type="radio" name="console" value="other" Required />
          </div>
          </section>
          <section>
          <div className="comp">
            <h3>Is the game complete, given up or not complete / not played?</h3>
            <br/>
            Complete <input type="radio" name="completion" value="yes" Required />
            Not Complete <input type="radio" name="completion" value="no" Required />
            Given up <input type="radio" name="completion" value="what" Required />
          </div>
        </section>
        <section>
          <div className="controls">
            <Button className="exit"> Cancel </Button>
            <input type="submit" value="Save" />
          </div>
        </section>
      </Form>
    );
  }
});
