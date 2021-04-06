import React,{Component} from "react";
import { AreaChart, Grid } from 'react-native-svg-charts';
import {Text,View} from "react-native";

import * as shape from 'd3-shape'
class Charts extends Component {
    constructor(props){
super(props);
this.state={
mydata:[
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80
]



}
    }
    render(){
        const {mydata}=this.state;
        console.log(mydata,"at charts page")
        return(
           <View>
               <Text>welcome to charts page</Text>
                <AreaChart
                style={{ height: 200 }}
                data={mydata}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: "red" }}
            >
                <Grid />
            </AreaChart>
            </View>
           
        )
    }
}
export default Charts ;





// import React from 'react'
// import { AreaChart, Grid } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
 
// class Charts extends React.PureComponent {
//     render() {
//         const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
//         return (
//             <AreaChart
//                 style={{ height: 200 }}
//                 data={data}
//                 contentInset={{ top: 30, bottom: 30 }}
//                 curve={shape.curveNatural}
//                 svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
//             >
//                 <Grid />
//             </AreaChart>
//         )
//     }
// }
// export default Charts;

//  import React,{Component} from "react";
// import {Text,View} from "react-native"


// class Charts extends Component {
//     constructor(props){
// super(props);
// this.state={



// }
//     }
//     render(){
//         return(
           
//             <View>
//                 <Text>welcome to charts</Text>
//             </View>    
           
//         )
//     }
// }
// export default Charts ;