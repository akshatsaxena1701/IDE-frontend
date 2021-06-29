import React from 'react'
import {useState} from 'react';
import axios from "axios"
import "./content.css"
import Output from './Output';
const Content = () => {
  const url="http://localhost:3000/code";
  const [data,setData]=useState({
      script:"",
      language:"",
      stdin:""
  })

  const [out,setOut]=useState({
      output:""
  })

  function handle(e){
      const newData={...data};
      newData[e.target.id]=e.target.value;
      setData(newData);
      console.log(newData);  
  }

  function submit(e){
      e.preventDefault();
      axios.post(url,{
          script:data.script,
          language:data.language,
          stdin:data.stdin
      })
      .then(res=>{
          console.log(res.data);
          const newOut={...out};
          newOut.output=res.data;
          setOut(newOut);
      })

  }


    return (
        <section>
            <div>
                <form onSubmit={(e)=>submit(e)}>
                    <div class="form-ide">
                    <div class="code-area">
                        <textarea onChange={(e)=>handle(e)} id="script" class="text-area" type="text" rows="40" cols="78" placeholder="Add your Code here"></textarea>
                    </div>
                    <div class="input-area">
                        <textarea onChange={(e)=>handle(e)} id="stdin"  class="text-area" type="text" rows="40" cols="78" placeholder="Add your Code here"></textarea>
                    </div>
                    </div>
                    <div class="sect-2">
                    <textarea onChange={(e)=>handle(e)} rows="1" id="language"  placeholder="Type language" type="text"></textarea>
                    <button class="btn-submit" type="submit">submit</button>
                    </div>
                </form>
            </div>
            <Output result={out.output}></Output>
        </section>
    )
}

export default Content
