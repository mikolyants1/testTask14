import { useEffect, useState } from "react";

interface IStyle {
  width:string,
  height:string,
  borderRadius:string,
  borderLeft:string,
  borderTop:string,
  borderBottom:string,
  borderRight:string,
  rotate:string
  }

  function Loader():JSX.Element {
    const [spin,setSpin] = useState<number>(0);
     useEffect(():void=>{
       setInterval(():void => {
        setSpin((prev:number)=>(
         prev == 360 ? 0 : prev + 10
        ));
       }, 50);
     },[])
      const style:IStyle = {
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        borderLeft:'15px solid white',
        borderTop:'15px solid black',
        borderBottom:'15px solid black',
        borderRight:'15px solid black',
        rotate:`${spin}deg`
      }
       return (
         <div style={{
          width:"100%",
          display:"flex",
          justifyContent:"center"
         }}>
           <div style={style} />
         </div>
       )
     }
export default Loader