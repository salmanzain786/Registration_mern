import { NavLink} from 'react-router-dom';
import React, { useState, useEffect } from 'react';



function Home() {
	const intital_value = 0;
	const [count, setCount] = useState(0);
	const [name, newName] = useState("Pagename");
	const [magic, newmagic] = useState("");
	const [state, newstate] = useState("");
	const [test, newtest] = useState("");
	const [table_state, newtablestate] = useState("");

	useEffect(() => {
	    // Update the document title using the browser API
	    newtablestate("Hello World");
	    // document.title = `You clicked ${count} times`;
	  },[count]);
	
  return (
    <div className="jumbotron">
       <h1>This Is {name}</h1>
       <hr/>
       <h1> {count}</h1>
       <button onClick={() => setCount(count+1)}> Click For Increament</button> &nbsp;
       <button onClick={() => setCount(count-1)}> Click For decreament</button> &nbsp;
       <button onClick={() => newmagic("New MAgic")}>Load Magic</button>
       <h1>{magic}</h1>

       <form>
       		<input type="text" name="test" onChange={(e) => newstate(e.target.value)} />
       </form>

       <table>
    			<tr>
    				<td id="table"><input type="text" name="name" value={table_state}/></td>
    				<td><button>Edit</button></td>
    			</tr>
    		</table>

       <button onClick={()=> newtest(state), ()=> newtablestate(state)}>Show</button>
       <p>{test}</p>
    </div>
  );
}

export default Home;
