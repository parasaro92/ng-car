myApp.controller('CarsCtrl', function($scope){

  $scope.carsData = [
    {
      id: 'red',
      color: 'red',
      image: 'assets/red.jpg',
      critic: 87,
      performance: 64,
      reliability: 52,
      safety: 44,
      interior: 90,
      label: 'Red',
      speed: 90
    },
    {
      id: 'black',
      color: 'silver',
      image: 'assets/silver.jpg',
      critic: 74,
      performance: 66,
      reliability: 50,
      safety: 46,
      interior: 97,
      label: 'Modern Steel',
      speed: 80
    },
    {
      id: 'blue',
      color: '#416393',
      image: 'assets/blue.jpg',
      critic: 90,
      performance: 70,
      reliability: 59,
      safety: 60,
      interior: 88,
      label: 'Blue',
      speed: 70
    }
  ]

  $scope.selected_car = $scope.carsData[0]
  $scope.progression = function(item) {
    $( "#critic" ).progressbar({
      value: item.critic
    });

    $( "#performance" ).progressbar({
      value: item.performance
    });

    $( "#reliability" ).progressbar({
      value: item.reliability
    });

    $( "#safety" ).progressbar({
      value: item.safety
    });

    $( "#interior" ).progressbar({
      value: item.interior
    });
  }

  window.onload = function() {
    $scope.selectCar()
  } 

  $scope.selectCar = function(item) {
    $scope.selected_car = item || $scope.carsData[0]
    $scope.progression($scope.selected_car)
    
    $( function() {
      $( ".ui-widget-header" ).animate({
        backgroundColor: $scope.selected_car.color
      });
    });

    var gaugeOptions = {
  
      chart: {
          type: 'solidgauge'
      },
      title: null,
      pane: {
          center: ['50%', '85%'],
          size: '140%',
          startAngle: -90,
          endAngle: 90,
          background: {
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },
      tooltip: {
        enabled: false
      },
  
      // the value axis
      yAxis: {
        stops: [
            [40, '#DDDF0D'], // green
            [80, '#DDDF0D'], // yellow
            [90, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
      },
  
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      }
    };
  
    // The speed gauge
    var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
      yAxis: {
          min: 0,
          max: 200,
          title: {
              text: 'Speed'
          }
      },
  
      credits: {
          enabled: false
      },
  
      series: [{
          name: 'Speed',
          data: [$scope.selected_car.speed],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;width:300px;color:black">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">OVERALL RATING</span></div>'
          },
          tooltip: {
              valueSuffix: 'OVERALL RATING'
          }
      }]
  
    }));
  }
});