var margin = {top: 40, right: 30, bottom: 40, left: 50},
        width = 800 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

var greyColor = "#898989";
var barColor = d3.interpolateBlues(0.3);
var highlightColor = d3.interpolateBlues(0.5);

var formatPercent = d3.format("");

var svg = d3.select("#ff").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    .range([0, width])
        .padding(0.2);    //長條形的寬度
var y = d3.scaleLinear()
    .range([height, 0]);

var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(22);    
var yAxis = d3.axisLeft(y).tickFormat(formatPercent);

var AAPL  =[ {"date":"2019-12-31","value":293.65},
                {"date":"2020-01-15","value":311.34},
                {"date":"2020-01-31","value":309.51},
                {"date":"2020-02-14","value":324.95},
                {"date":"2020-02-28","value":273.36},
                {"date":"2020-03-13","value":277.97},
                {"date":"2020-03-31","value":254.29},
                {"date":"2020-04-15","value":284.43},
                {"date":"2020-04-30","value":293.80},
                {"date":"2020-05-11","value":315.01}];

var AMZN  =[ {"date":"2019-12-31","value":1847.84},
                {"date":"2020-01-15","value":1862.02},
                {"date":"2020-01-31","value":2008.72},
                {"date":"2020-02-14","value":2134.87},
                {"date":"2020-02-28","value":1883.75},
                {"date":"2020-03-13","value":1785.00},
                {"date":"2020-03-31","value":1949.72},
                {"date":"2020-04-15","value":2307.68},
                {"date":"2020-04-30","value":2474.00},
                {"date":"2020-05-11","value":2409.00}];

var GOOG  =[ {"date":"2019-12-31","value":1337.02},
                {"date":"2020-01-15","value":1439.20},
                {"date":"2020-01-31","value":1434.23},
                {"date":"2020-02-14","value":1520.74},
                {"date":"2020-02-28","value":1339.33},
                {"date":"2020-03-13","value":1219.73},
                {"date":"2020-03-31","value":1162.81},
                {"date":"2020-04-15","value":1262.47},
                {"date":"2020-04-30","value":1348.66},
                {"date":"2020-05-11","value":1403.26}];

var DIS  =[ {"date":"2019-12-31","value":144.63},
                {"date":"2020-01-15","value":144.32},
                {"date":"2020-01-31","value":138.31},
                {"date":"2020-02-14","value":139.53},
                {"date":"2020-02-28","value":117.65},
                {"date":"2020-03-13","value":102.52},
                {"date":"2020-03-31","value":96.60},
                {"date":"2020-04-15","value":103.37},
                {"date":"2020-04-30","value":108.15},
                {"date":"2020-05-11","value":107.77}];

var FB  =[ {"date":"2019-12-31","value":205.25},
                {"date":"2020-01-15","value":221.15},
                {"date":"2020-01-31","value":201.91},
                {"date":"2020-02-14","value":214.18},
                {"date":"2020-02-28","value":192.47},
                {"date":"2020-03-13","value":170.28},
                {"date":"2020-03-31","value":166.80},
                {"date":"2020-04-15","value":176.97},
                {"date":"2020-04-30","value":204.71},
                {"date":"2020-05-11","value":213.18}];

var Microsoft  =[ {"date":"2019-12-31","value":157.70},
                {"date":"2020-01-15","value":163.18},
                {"date":"2020-01-31","value":170.23},
                {"date":"2020-02-14","value":185.35},
                {"date":"2020-02-28","value":162.01},
                {"date":"2020-03-13","value":158.83},
                {"date":"2020-03-31","value":157.71},
                {"date":"2020-04-15","value":171.88},
                {"date":"2020-04-30","value":179.21},
                {"date":"2020-05-11","value":186.74}];

var Adobe  =[ {"date":"2019-12-31","value":329.81},
                {"date":"2020-01-15","value":324.94},
                {"date":"2020-01-31","value":351.14},
                {"date":"2020-02-14","value":379.67},
                {"date":"2020-02-28","value":345.12},
                {"date":"2020-03-13","value":335.50},
                {"date":"2020-03-31","value":318.24},
                {"date":"2020-04-15","value":332.55},
                {"date":"2020-04-30","value":353.64},
                {"date":"2020-05-11","value":371.42}];

var AAL  =[ {"date":"2019-12-31","value":26.68},
                {"date":"2020-01-15","value":27.58},
                {"date":"2020-01-31","value":26.84},
                {"date":"2020-02-14","value":29.20},
                {"date":"2020-02-28","value":19.05},
                {"date":"2020-03-13","value":14.31},
                {"date":"2020-03-31","value":12.19},
                {"date":"2020-04-15","value":12.29},
                {"date":"2020-04-30","value":12.01},
                {"date":"2020-05-11","value":10.10}];

var JPM  =[ {"date":"2019-12-31","value":139.40},
                {"date":"2020-01-15","value":136.72},
                {"date":"2020-01-31","value":132.36},
                {"date":"2020-02-14","value":137.46},
                {"date":"2020-02-28","value":116.11},
                {"date":"2020-03-13","value":103.91},
                {"date":"2020-03-31","value":90.03},
                {"date":"2020-04-15","value":90.79},
                {"date":"2020-04-30","value":95.76},
                {"date":"2020-05-11","value":89.97}];

var ZOOM  =[ {"date":"2019-12-31","value":68.04},
                {"date":"2020-01-15","value":76.94},
                {"date":"2020-01-31","value":76.30},
                {"date":"2020-02-14","value":90.95},
                {"date":"2020-02-28","value":105.00},
                {"date":"2020-03-13","value":107.47},
                {"date":"2020-03-31","value":146.12},
                {"date":"2020-04-15","value":151.56},
                {"date":"2020-04-30","value":135.17},
                {"date":"2020-05-11","value":166.48}];



var changedata = function(data){
    console.log(data);
    d3.selectAll(".bar").remove();
    d3.selectAll(".label").remove();

x.domain(data.map( d => { return d.date; }));

    // y.domain([0, d3.max(dataset,  d => { return d.value; })]);
y.domain([0, 2500]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text") 
    .style("font-size",11)
    .style("font-family","Microsoft JhengHei")
    .style("text-anchor", "end") 
    .attr("dx", "5.0em") 
    .attr("dy", "0.0em") 
    .attr("transform", "rotate(10)");

svg.append("g")
    .attr("class","y axis")
    .style("font-size",13)
    .call(yAxis);

svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .style("display", d => { return d.value === null ? "none" : null; })
    .style("fill",  d => { 
        return d.value === d3.max(data,  d => { return d.value; }) //長條形的顏色
        ? highlightColor : barColor
        })
    .attr("x",  d => { return x(d.date); })
    .attr("width", x.bandwidth())
        .attr("y",  d => { return height; })
//        .attr("height", 0)
//            .transition()
//            .duration(750)
//            .delay(function (d, i) {
//                return i * 150;
//            })
    .attr("y",  d => { return y(d.value); })
    .attr("height",  d => { return height - y(d.value); });

svg.selectAll(".label")        
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("display",  d => { return d.value === null ? "none" : null; })
    .attr("x", ( d => { return x(d.date) + (x.bandwidth()/2) -10 ; }))
        .style("fill",  d => {                                                  //字體highlight
            return d.value === d3.max(data,  d => { return d.value; }) 
            ? highlightColor : greyColor
            })
  //  .attr("y",  d => { return height; })
  //      .attr("height", 0)                            //長條形上方數字移動
  //          .transition()
  //          .duration(750)
  //          .delay((d, i) => { return i * 150; })
    .text( d => { return formatPercent(d.value); })   //長條形上方顯示的數字
        .style("fill", "white")
    .attr("y",  d => { return y(d.value); })
    .attr("dy", "-.7em");
};

   svg.append("text")
     .attr("x", -490 )
     .attr("y",  -20 )
     .attr("transform", function(d) 
     {
        return "rotate(-90)"
     })
     .style("text-anchor", "middle")
     .style("fill", "white")
     .style("font-size",10)
     .text( " 單位 : 美金(元) ");

changedata(AAPL);

var d001 = d3.selectAll('#btn1')
        .on("click",function(d){
            changedata(AAPL)
        })
        
var d002 = d3.selectAll('#btn2')
        .on("click",function(d){
            changedata(AMZN)
        })

var d003 = d3.selectAll('#btn3')
        .on("click",function(d){
            changedata(GOOG)
        })

var d004 = d3.selectAll('#btn4')
        .on("click",function(d){
            changedata(DIS)
        })

var d005 = d3.selectAll('#btn5')
        .on("click",function(d){
            changedata(FB)
        })

var d006 = d3.selectAll('#btn6')
        .on("click",function(d){
            changedata(Microsoft)
        })

var d007 = d3.selectAll('#btn7')
        .on("click",function(d){
            changedata(Adobe)
})

var d008 = d3.selectAll('#btn8')
        .on("click",function(d){
            changedata(AAL)
})

var d009 = d3.selectAll('#btn9')
        .on("click",function(d){
            changedata(JPM)
})

var d010 = d3.selectAll('#btn10')
        .on("click",function(d){
            changedata(ZOOM)
})