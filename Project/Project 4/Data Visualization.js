document.addEventListener("DOMContentLoaded", function(){
    const continent = [
        {country : "Africa", population : 2478, bg : "#3e95cd", bc : "#3e95cd"},
        {country : "Asia", population : 5267, bg : "#8e5ea2", bc : "#8e5ea2"},
        {country : "Europe", population : 734, bg : "#3cba9f", bc : "#3cba9f"},
        {country : "Latin America", population : 784, bg : "#e8c3b9", bc : "#e8c3b9"},
        {country : "North America", population : 433, bg : "#c45850", bc : "#c45850"}
    ]

    new Chart(document.getElementById("bar-chart"),{
        type : 'bar',
        data : {
            labels : [continent[0].country, continent[1].country,
            continent[2].country, continent[3].country, continent[4].country],
            datasets : [
                {
                    label : "Population in millions",
                    backgroundColor : [continent[0].bg, continent[1].bg, continent[2].bg,
                        continent[3].bg, continent[4].bg,],
                    data : [continent[0].population, continent[1].population, continent[2].population, 
                        continent[3].population, continent[4].population]
                }
            ]
        },
        options : {
            legend : { display : false },
            title : {
                display : true,
                text : "Prediction of World Population in 2050"
            }
        }
    })
    new Chart(document.getElementById("line-chart"),{
        type : "line",
        data : {
            labels : [1800,1850,1900,1950,2000,2050],
            datasets : [{
                data : [142,354,692,1534,2123,continent[0].population],
                label : continent[0].country,
                borderColor : continent[0].bc,
                fill : false
            },{
                data : [356,681,1374,2647,4489,continent[1].population],
                label : continent[1].country,
                borderColor : continent[1].bc,
                fill : false
            },{
                data : [234,354,447,524,681,continent[2].population],
                label : continent[2].country,
                borderColor : continent[2].bc,
                fill : false
            },{
                data : [142,241,314,486,621,continent[3].population],
                label : continent[3].country,
                borderColor : continent[3].bc,
                fill : false
            },{
                data : [51,146,248,299,341,continent[4].population],
                label : continent[4].country,
                borderColor : continent[4].bc,
                fill : false
            }]
        },
        option : {
            title : {
                display : true,
                text : "World Population per region in millions"
            }
        }
    })
});