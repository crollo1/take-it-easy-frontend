
import Home from "./Home";

function PostTask() {


    return (

        <div className="postTask">
            <h2>Post Task</h2>
            <p className="posttasktext">In a few words, what do you need done?</p>
            <form>

                <div>
                <input className="posttaskinput"
                name="name"
                type="name"
                placeholder='e.g. Help me move my fridge'
                />
                </div>
                <div>
                <input className="posttaskinput"
                type="date"
                />
                </div>
                <div className="posttaskbutton">
                <button>On date</button>
                <button>Before Date</button>
                <button>I'm Flexible</button>
                </div>
            </form>
        </div>

    );


}; // PostTask

export default PostTask;