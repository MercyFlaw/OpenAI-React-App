import React from 'react';

//const res = {result}.length > 0 ? {result}:""
export default function Fetch({result}){
    
    const Nstr = "Protein: 12.6g, Carbohydrates: 0.7g, Fats: 10.6g, Calories:155kcal";
    const str = result.replace(/ /g,'');
    const obj2 = str.split(',').map(x=> {
        const keyValue = x.split(':');
        return {key: keyValue[0],value: keyValue[1]};
    });
    return(obj2)
}
