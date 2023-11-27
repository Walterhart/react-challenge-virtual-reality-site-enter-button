import React from "react"
import WelcomeMessage from "./components/WelcomeMessage"
import generateMessage from "./utilities/generateMessage"

export default function App() {

    const [userData, setUserData] = React.useState({
	    hasEntered: false,
	    pageLoadTime: new Date(),
	    entranceTime: undefined,
	    clickCoordinates: { offsetX: undefined, offsetY: undefined },
    })

    if (userData.hasEntered) {
        generateMessage(userData)
    }

/* Challenge
  
     This retro VR app needs an "enter" button! The button should be set up as follows:
     
        1. If the user clicks the button, the values of the userData state's properties should 
           become the following: 
           
           	                  Property		 	          Value(s)					  
			            ╷--------------------╷----------------------------------╷
		  	            |  hasEntered        |	true                            |
			            |--------------------|----------------------------------|
			            |  pageLoadTime      |	perserve previous value         |
			            |--------------------|----------------------------------|
			            |  entranceTime      |	new date object                 |	
                        |--------------------|----------------------------------|
			            |  clickCoordinates  |	object containing click event's |
                        |                    |  offsetX and offsetY values      |	
			            ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                        		         
        2. If you complete these tasks correctly, you should get a button with some retro, glitchy 
           visual effects, and you should get a correctly rendered message in the console!
 */
   
     const collectUserData= (event) =>{
         const {offsetX, offsetY} = event.nativeEvent
         setUserData(prev =>({
             hasEntered : true,
             pageLoadTime: prev.pageLoadTime, 
             entranceTime : new Date(),
             clickCoordinates : {offsetX, offsetY}
         }))
       
     }

     return (
    	<div>
    		<button
          onClick={collectUserData}
    			disabled={userData.hasEntered}
    			className={userData.hasEntered ? "activated" : "unactivated"}
    		>
    			{userData.hasEntered ? "Connecting" : "Enter"}
    		</button>
    
    		<WelcomeMessage userData={userData} />
    	</div>
    )
}