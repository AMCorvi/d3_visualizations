let barData = Array;


let createDataPoints = (amount, max)=>{

    // Determine whether datapoint is greater then max and 
    //   and decrease if  that is the case. 
    if (max > 100) { max = max * .80; 
        return max;
    };

    barData = Array.apply(null, new Array(amount) ) 
    barData = barData.map(el => {
      return   Math.floor( Math.random()*100 )       
    });


    return barData;
}

createDataPoints(Math.floor(Math.random()*100),82);
console.log(barData)

// Data display specifications
let height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

// Linear scale allow data not to exceed maximum 
let yScale = d3.scale.linear()
                .domain([0, d3.max(barData)])
                .range([0, height])

// Distribute all data across the x-axis evenly
let xScale = d3.scale.ordinal()
                .domain( d3.range(0, barData.length) )
                .rangeBands([ 0, width ])

// Assign color of data-point relative to max and min
let colors = d3.scale.linear()
                .domain( [ 0 , d3.max(barData)*.25, d3.max(barData)*.50, d3.max(barData)*.75, d3.max(barData) ])
                .range(['#FFCB03', '#B222B2', '#2222B2', '#22B2B2', '#22B222'])



d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill', colors)
        .attr('width', xScale.rangeBand())
        .attr('height', (d)=> {
            return yScale(d);  
        })
        .attr('x', (data, index)=> {
            return xScale(index) ; 
        })
        .attr('y', (data)=> {
            return  height - yScale(data);
        })
