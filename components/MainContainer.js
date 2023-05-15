import Head from "next/head"
import A from "./A"



const MainContainer = ({children,keywords}) => {
  return (
    <>
        <Head>
          <title>My next-js app</title>
          <meta keywords={'nextjs' + keywords}/>
      </Head>


    <div className="navbar">
        <A href={'/'} text="Main"></A>
        <A href={'/users'} text="Users"></A>

    </div>
    <div>
        {children}
    </div>
    <style jsx>
        {`
            .navbar{
                background:orange;
                padding:15px;
            }
        `}
    </style>
    </>
  )
}

export default MainContainer