import React from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import { gram1, gram2, gram3, cal, Gram} from  './Labels.js'

Chart.register(ArcElement);
Chart.register([Tooltip]);
Gram()

const config = {
    data: {
        labels: [
            'Protein',
            'Carbohydrates',
            'Fat'
        ],
          datasets: [{
            label: 'Nutriton Wheel',
            data: [
              {nutrient: 'Protein', grams: gram1.substring(0,gram1.length-1)}, 
              {nutrient: 'Carbohydrates', grams: gram2.substring(0,gram1.length-1)},
              {nutrient: 'Fat', grams: gram3.substring(0,gram1.length-1)}],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderAlign: 'inner',
            borderRadius: 12
           
          }]
        },
          options:{
            cutout: 150,
            parsing: {key:'grams'},

            
          }
}

export default function Graph(){
    return(
        <div className="flex">
        <div className="item">
            <div className="chart-relative">
                <Doughnut{...config}></Doughnut>
                
            </div>
            <h3 className="NW">Nutrition Wheel
                    <span className="Total"> {cal}
                    </span>
                </h3>
            <div className="flex flex-col py-10 gap-4">  
            
            </div>
        </div>
        </div>
    )
}

//give the macronutrients and calories per 100g in the format like protein:x, carbohydrates:y and fats:z, calories:q for 4 whole eggs