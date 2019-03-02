import React from 'react'
//@ ts-ignore
const getSiteControl = function (w,i,d,g,e,t,s) {w[d] = w[d]||[];t= i.createElement(g);
    t.async=1;t.src=e;s=i.getElementsByTagName(g)[0];s.parentNode.insertBefore(t, s);
    return <div></div>
}(window, document, '_gscq','script','//widgets.getsitecontrol.com/87117/script.js')

const Widget = () => getSiteControl

export default Widget;