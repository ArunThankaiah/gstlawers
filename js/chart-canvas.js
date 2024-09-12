/*============= graph-chart ======*/
    window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
        {   
          axisX: {
              margin:"10",
              labelFontFamily:"$raleway",
              labelFontColor:"#565656",
              labelFontWeight:"500",
              labelFontSize:"13",
              labelMargin:"10",
              gridThickness: 1,
              tickLength: 0
          },
            axisY:{
                gridThickness: 1,
            },
                dataPointMaxWidth: 40,
          data: [
          {        
            type: "column",
            color: "#e66e46",
            dataPoints: [
            { x: 10, y: 20,  label: "JAN"},
            { x: 20, y: 26, label: "FAB"},
            { x: 30, y: 30, label: "MAR"},
            { x: 40, y: 26, label: "Apr"},
            { x: 50, y: 22, label: "MAY"},
            { x: 60, y: 15, label: "JUN"},
            { x: 70, y: 22, label: "JUL"},
            { x: 80, y: 26, label: "AUG"},
            ]
          },{        
            type: "column",
            color: "#46c8be",
            dataPoints: [
            { x: 10,  y: 32,label: "JAN"},
            { x: 20, y: 20, label: "FAB"},
            { x: 30, y: 25, label: "MAR"},
            { x: 40, y: 30, label: "Apr"},
            { x: 50, y: 30, label: "MAY"},
            { x: 60, y: 25, label: "JUN"},
            { x: 70, y: 30, label: "JUL"},
            { x: 80, y: 37, label: "AUG"},

            ]
          }
          ]
        });

        chart.render();
      }
    