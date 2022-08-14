import React from "react";
import Head from 'next/head'
import Logo from '../public/assets/images/logo/Logo.png'

const SEO = ({ title, description } : {title: string, description: string}) => {
  return (
    <Head>
   
<title>3rdweblabs — {title}</title>
<meta name="title" content={`3rdweblabs ${title}`}/>
<meta name="description" content={description}/>

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://3rdweblabs.io/" />
<meta property="og:title" content={`3rdweblabs - ${title}`}/>
<meta property="og:image" content={Logo.src}/>

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://3rdweblabs.io/"/>
<meta property="twitter:title" content={`3rdweblabs - ${title}`}/>
<meta property="twitter:description" content={description}/>
<meta property="twitter:image" content={Logo.src}/>
    </Head>
  )
}

export default SEO;
