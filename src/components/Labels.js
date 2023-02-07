import React from 'react'
//import Fetch from './Fetch.js'
function Fetch({result}){
    result = result || "Protein: 0g, Carbohydrates: 0g, Fats: 0g, Calories:0kcal"
    const str = result.replace(/ /g,'');
    const obj2 = str.split(',').map(x=> {
        const keyValue = x.split(':');
        return {key: keyValue[0],value: keyValue[1]};
    });
    return(obj2)
}


var gram1 ="45g";
var gram2 ="45g";
var gram3 ="45g";
var cal = "0kcal";
export default function Labels( {result} ) {
    
    const obj2 = Fetch({result}) 
    console.log(result)
    console.log(obj2)
    const obj=[
        {
            type:Object.values(obj2[0])[0],
            grams:Object.values(obj2[0])[1],
            color:'#f9c74f'
        },
        {
            type:Object.values(obj2[1])[0],
            grams:Object.values(obj2[1])[1],
            color:'rgb(54, 162, 235)'
        },
        {
            type:Object.values(obj2[2])[0],
            grams:Object.values(obj2[2])[1],
            color:'rgb(255, 99, 132)'
        }
    ]
    
    gram1=Object.values(obj2[0])[1]
    gram2=Object.values(obj2[1])[1]
    gram3=Object.values(obj2[2])[1]
    cal=Object.values(obj2[3])[1]
    return(
        <>
        {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
        </>
    )
}

export function Gram(){
    return gram1,gram2,gram3
}


function LabelComponent({data}){
    if(!data) return <></>;
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
            <span className="dot"style={{background: data.color??'#f9c74f'}}></span>
                <h3 className='nutrients'>{data.type??""}</h3>
            </div>
            <h3 className='grams'>{data.grams??0}</h3>
        </div>
    )
}

export {gram1};
export {gram2};
export {gram3};
export {cal};
