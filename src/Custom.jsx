import React, { useState } from "react";

const Custom = () => {
    const [content , setContent] = useState(`hello world`);
    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
            <textarea style={{width: '100%', minHeight: '600px', padding: '10px'}} onChange={e => setContent(e.target.value)}>
                {content}
            </textarea>
            </div>
            <div dangerouslySetInnerHTML={{__html: content}} style={{width: '50%'}} />
        </div>
    )
};

export default Custom;
