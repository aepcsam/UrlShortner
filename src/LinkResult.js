import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';


const LinkResult = ({inputValue}) => {

    const [shortenLink, setShortenLink] = useState("");
    const [copied,setCopied]=useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false)


    const fetchData = async()=>{
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link);
            console.log(res);
        } catch (err) {
            setError(err);
        } finally{
            setLoading(false);
        }
    } 

    useEffect(()=>{
        if(inputValue.length){
            fetchData();
        }
    },[inputValue]);
    // console.log(inputValue);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setCopied(false)
        },1000)
        return () => {
          clearTimeout(timer)
        }
      }, [copied]);


      if(loading){
          return <p className='noData'>Loading...</p>
      }
      if(error){
          return <p className='noData'>Something Error...:(</p>
      }

   
    

  return (
      <>{
          shortenLink && 
    <div className='result'>
        <a href={shortenLink} target="_blank">{shortenLink}</a>

        <CopyToClipboard text={shortenLink} onCopy={()=>setCopied(true)}>
        <button className={copied ? 'copied' : ''}>Copy to Link</button>

        </CopyToClipboard>
        </div>
      }
      </>

  )
};

export default LinkResult;