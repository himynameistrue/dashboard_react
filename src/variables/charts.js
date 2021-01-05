/*!
=========================================================
* Paper Dashboard React - v1.2.0
=========================================================
* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [ "White",
            "SaddleBrown",
            "Black",
            "RosyBrown",
            "Gray",
            "Tan",
            "LightGray",
            "SlateGray",
            "Thistle",
            "IndianRed",
            "RebeccaPurple",
            "Lavender",
            "LightBlue",
            "Crimson",
            'DarkKhaki',
            "Indigo",
            "PeachPuff",
            "DarkBlue",
            "DarkGreen",
            "MediumPurple",
           " Violet",
            "MediumAquamarine",
            'SlateBlue',
            'DarkRed',
            'LightSalmon',
            'Pink'],
          borderWidth: 0,
          data: [4899, 3127, 3080, 2574,2312, 1726, 1441, 947, 
            906 ,761, 757,201,144,141, 137,112,104,82,76,67,65,59 ,59 ,58 ,57,51 ],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

const dashboardFabricData = {
  data: (canvas) => {
    return {
      labels: ['cotton_wool',
      'leather',
      'denim',
      'lace',
      'pailettes_strass'],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
          
          borderWidth: 0,
          data: [1906
          ,596
          ,90
          ,16
          ,1 ],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};


const dashboardFabricDataJacket = {
  data: (canvas) => {
    return {
      labels: ['cotton_wool',
      'leather',
      'denim',
      'lace',
      ],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
          
          borderWidth: 0,
          data: [101
          ,66
          ,6
          ,2
           ],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

const dashboardFabricDataJacketInstagram = {
  data: (canvas) => {
    return {
      labels: ['cotton_wool',
      'leather',
      'denim',
      'lace',
      'paillettes_strass',
      ],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
          
          borderWidth: 0,
          data: [33
          ,26
          ,10
          ,5 
          ,3,
           ],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};


const dashboardFabricDataInstagram = {
  data: (canvas) => {
    return {
      labels: ['cotton_wool',
      'leather',
      'denim',
      'lace',
      'pailettes_strass'],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
          
          borderWidth: 0,
          data: [213
          ,157
          ,83
          ,80
          ,35 ],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};


const skirtColorFs = {
  data: (canvas) => {
    return {
      labels: ['White',
          'SaddleBrown',
          'Black',
          'RosyBrown',
          'Gray',
          'Tan',
          'LightGray',
          'IndianRed',
          'Thistle',
          'SlateGray',
          'RebeccaPurple',
          'Lavender',
          'DarkKhaki',
          'Crimson',
          'PeachPuff',
          'Tomato',
          'Magenta',
          'LightBlue',
          'LightSalmon',
          'Khaki',
          'Orange',
          'Salmon',
          'Bisque',
          'OrangeRed',
          'Pink',
          'DarkGreen',],
      datasets: [
        {
          label: "Top Colors",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ['White',
          'SaddleBrown',
          'Black',
          'RosyBrown',
          'Gray',
          'Tan',
          'LightGray',
          'IndianRed',
          'Thistle',
          'SlateGray',
          'RebeccaPurple',
          'Lavender',
          'DarkKhaki',
          'Crimson',
          'PeachPuff',
          'Tomato',
          'Magenta',
          'LightBlue',
          'LightSalmon',
          'Khaki',
          'Orange',
          'Salmon',
          'Bisque',
          'OrangeRed',
          'Pink',
          'DarkGreen',],
          
          borderWidth: 0,
          data: [480
        ,357
          ,261
          ,244
         ,215
          ,212
          ,136
          ,95
          ,76
         ,73
          ,44
          ,24
          ,21
         ,18
          ,15
         ,13
          ,11
          ,10
          ,9
         ,7
          ,7
         ,7
          ,7
         ,7
         ,6
         ,6],
         
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};



const dashboardNASDAQChart = {
  data: {
   
    labels: [
      // "Jan",
      // "Feb",
      // "Mar",
      // "Apr",
      // "May",
      // "Jun",
      // "Jul",
      // "Aug",
      // "Sep",
      // "Oct",
      // "Nov",
      // "Dec",
      '01-05',
      '01-12',
      '01-19',
      '01-26',
      '02-02',
      '02-09',
      '02-16',
      '02-23',
      '03-01',
      '03-08',
      '03-15',
      '03-22',
      '03-29',
      '04-05',
      '04-12',
      '04-19',
      '04-26',
      '05-03',
      '05-10',
      '05-17',
      '05-24',
      '05-31',
      '06-07',
      '06-14',
      '06-21',
      '06-28',
      '07-05',
      '07-12',
      '07-19',
      '07-26',
      '08-02',
      "08-09",
      "08-16",
      '08-23',
      "08-30",
      "09-06",
      "09-13",
      '09-20',
      "09-27",
      '10-04',
      "10-11",
      "10-18",
      "10-25",
      '11-01',
      '11-08',
      "11-15",
      "11-22",
      "11-29",
      "12-06",
      "12-13",
      "12-20",
      
    ],
    datasets: [
      {
        label: "chart6",
        data: [3
       ,2
        ,1
        ,2
        ,4
       ,3
       ,16
        ,6
        ,4
        ,64
        ,15
        ,1
       ,5
        ,3
        ,3
        ,3
        ,5
        ,2
        ,5
        ,1
        ,4
        ,6
        ,5
        ,3
        ,2
        ,1
        ,1
        ,1
        ,3
        ,2
        ,5
        ,1
        ,2
        ,1
        ,1
        ,2
        ,4
        ,3
        ,5
        ,0
        ,1
        ,0
        ,0
        ,2
        ,1
        ,1
        ,1
        ,1
        ,0
        ,2
        ,1],
        fill: false,
        borderColor: "#AA6F5D",
        backgroundColor: "transparent",
        pointBorderColor: "#AA6F5D",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      // {
      //   data: [        
      // ]
      //    ,
      //   fill: false,
      //   borderColor: "#51CACF",
      //   backgroundColor: "transparent",
      //   pointBorderColor: "#51CACF",
      //   pointRadius: 1,
      //   pointHoverRadius: 2,
      //   pointBorderWidth: 4,
      // },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of mentions'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
    } 
  },
};


const MotiviMiroglio = {
  data: {
   
    labels: [
      '01-05',
      '01-12',
      '01-19',
      '01-26',
      '02-02',
      '02-09',
      '02-16',
      '02-23',
      '03-01',
      '03-08',
      '03-15',
      '03-22',
      '03-29',
      '04-05',
      '04-12',
      '04-19',
      '04-26',
      '05-03',
      '05-10',
      '05-17',
      '05-24',
      '05-31',
      '06-07',
      '06-14',
      '06-21',
      '06-28',
      '07-05',
      '07-12',
      '07-19',
      '07-26',
      '08-02',
      "08-09",
      "08-16",
      '08-23',
      "08-30",
      "09-06",
      "09-13",
      '09-20',
      "09-27",
      '10-04',
      "10-11",
      "10-18",
      "10-25",
      '11-01',
      '11-08',
      "11-15",
      "11-22",
      "11-29",
      "12-06",
      "12-13",
      "12-20",
      
    ],
    datasets: [
      {
        label: "chart4",
        data: [3
       ,2
        ,1
        ,2
        ,4
       ,3
       ,16
        ,6
        ,4
        ,64
        ,15
        ,1
       ,5
        ,3
        ,3
        ,3
        ,5
        ,2
        ,5
        ,1
        ,4
        ,6
        ,5
        ,3
        ,2
        ,1
        ,1
        ,1
        ,3
        ,2
        ,5
        ,1
        ,2
        ,1
        ,1
        ,2
        ,4
        ,3
        ,5
        ,0
        ,1
        ,0
        ,0
        ,2
        ,1
        ,1
        ,1
        ,1
        ,0
        ,2
        ,1],
        fill: false,
        borderColor: "#CC794E",
        backgroundColor: "transparent",
        pointBorderColor: "#CC794E",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label: "chart5",
        data: [  13
          ,23
         ,23
          ,43
          ,26
         ,64
          ,69
         ,45
          ,65
         ,111
          ,63
          ,74
         ,93
         ,78
          ,66
         ,122
         ,59
          ,31
          ,39
         ,29
         ,47
          ,47
         ,57
         ,37
          ,25
         ,57
         ,85
         ,57
         ,68
          ,47
         ,96
         ,49
         ,59
          ,61
          ,191
          ,67
         ,107
         ,110
         ,106
         ,126
          ,101
         ,132
         ,89
         ,125
          ,129
         ,74
          ,137
          ,81
         ,38
          ,94
         ,131
               
      ]
         ,
        fill: false,
        borderColor: "#286F6F",
        backgroundColor: "transparent",
        pointBorderColor: "#286F6F",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of mentions'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
    } 
  },
};


const MotiviPerte = {
  data: {
   
    labels: [
      // "Jan",
      // "Feb",
      // "Mar",
      // "Apr",
      // "May",
      // "Jun",
      // "Jul",
      // "Aug",
      // "Sep",
      // "Oct",
      // "Nov",
      // "Dec",
      '01-05',
      '01-12',
      '01-19',
      '01-26',
      '02-02',
      '02-09',
      '02-16',
      '02-23',
      '03-01',
      '03-08',
      '03-15',
      '03-22',
      '03-29',
      '04-05',
      '04-12',
      '04-19',
      '04-26',
      '05-03',
      '05-10',
      '05-17',
      '05-24',
      '05-31',
      '06-07',
      '06-14',
      '06-21',
      '06-28',
      '07-05',
      '07-12',
      '07-19',
      '07-26',
      '08-02',
      "08-09",
      "08-16",
      '08-23',
      "08-30",
      "09-06",
      "09-13",
      '09-20',
      "09-27",
      '10-04',
      "10-11",
      "10-18",
      "10-25",
      '11-01',
      '11-08',
      "11-15",
      "11-22",
      "11-29",
      "12-06",
      "12-13",
      "12-20",
      
    ],
    datasets: [
      {
        data: [3
       ,2
        ,1
        ,2
        ,4
       ,3
       ,16
        ,6
        ,4
        ,64
        ,15
        ,1
       ,5
        ,3
        ,3
        ,3
        ,5
        ,2
        ,5
        ,1
        ,4
        ,6
        ,5
        ,3
        ,2
        ,1
        ,1
        ,1
        ,3
        ,2
        ,5
        ,1
        ,2
        ,1
        ,1
        ,2
        ,4
        ,3
        ,5
        ,0
        ,1
        ,0
        ,0
        ,2
        ,1
        ,1
        ,1
        ,1
        ,0
        ,2
        ,1],
        fill: false,
        borderColor: "#286F6F",
        backgroundColor: "transparent",
        pointBorderColor: "#286F6F",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label:"chart 7",
        data: [        
         13
,23
,23
,43
,26
,64
,69
,45
,65
,111
,63
,74
,93
,78
,66
,122
,59
,31
,39
,29
,47
,47
,57
,37
,25
,57
,85
,57
,68
,47
,96
,49
,59
,61
,191
,67
,107
,110
,106
,126
,101
,132
,89
,125
,129
,74
,137
,81
,38
,94
,131

      ]
         ,
        fill: false,
        borderColor: "#CC794E",
        backgroundColor: "transparent",
        pointBorderColor: "#CC794E",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of mentions'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
    } 
  },
};

const MotiviOltreFashion = {
  data: {
   
    labels: [
      '01-05',
      '01-12',
      '01-19',
      '01-26',
      '02-02',
      '02-09',
      '02-16',
      '02-23',
      '03-01',
      '03-08',
      '03-15',
      '03-22',
      '03-29',
      '04-05',
      '04-12',
      '04-19',
      '04-26',
      '05-03',
      '05-10',
      '05-17',
      '05-24',
      '05-31',
      '06-07',
      '06-14',
      '06-21',
      '06-28',
      '07-05',
      '07-12',
      '07-19',
      '07-26',
      '08-02',
      "08-09",
      "08-16",
      '08-23',
      "08-30",
      "09-06",
      "09-13",
      '09-20',
      "09-27",
      '10-04',
      "10-11",
      "10-18",
      "10-25",
      '11-01',
      '11-08',
      "11-15",
      "11-22",
      "11-29",
      "12-06",
      "12-13",
      "12-20",
      
    ], 
    datasets: [
      {
        label: "chart1",
        data: [3
       ,2
        ,1
        ,2
        ,4
       ,3
       ,16
        ,6
        ,4
        ,64
        ,15
        ,1
       ,5
        ,3
        ,3
        ,3
        ,5
        ,2
        ,5
        ,1
        ,4
        ,6
        ,5
        ,3
        ,2
        ,1
        ,1
        ,1
        ,3
        ,2
        ,5
        ,1
        ,2
        ,1
        ,1
        ,2
        ,4
        ,3
        ,5
        ,0
        ,1
        ,0
        ,0
        ,2
        ,1
        ,1
        ,1
        ,1
        ,0
        ,2
        ,1],

        fill: false,
        borderColor: "#CC794E",
        backgroundColor: "transparent",
        pointBorderColor: "#CC794E",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
        // label: "motivi",
      },
      {
        label: "chart2",
        data: [   
         
13
,23
,23
,43
,26
,64
,69
,45
,65
,111
,63
,74
,93
,78
,66
,122
,59
,31
,39
,29
,47
,47
,57
,37
,25
,57
,85
,57
,68
,47
,96
,49
,59
,61
,191
,67
,107
,110
,106
,126
,101
,132
,89
,125
,129
,74
,137
,81
,38
,94
,131
     
      ]
        ,
        fill: false,
        borderColor: "#286F6F",
        backgroundColor: "transparent",
        pointBorderColor: "#286F6F",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
        // label: "miroglio",
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of mentions'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
    } 
  },
};

const LuxuryBrands = {
  data: {
    labels: [
      "Luxury Brand"
     ],
    datasets: [
      {
        label: "Balmain",
        data: [14159],
        fill: true,
        borderColor: "#AA6F5D",
        backgroundColor: "#AA6F5D",
        pointBorderColor: "#AA6F5D",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label: "Gucci",
        data: [9806],
        fill: true,
        borderColor: "#BD8270",
        backgroundColor: "#BD8270",
        pointBorderColor: "#BD8270",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label: "Celine",
        data: [8643],
        fill: true,
        borderColor: "#C09175",
        backgroundColor: "#C09175",
        pointBorderColor: "#C09175",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label: "Rocha",
        data: [4516],
        fill: true,
        borderColor: "#D1AE9B",
        backgroundColor: "#D1AE9B",
        pointBorderColor: "#D1AE9B",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
      {
        label: "Versace",
        data: [1763],
        fill: true,
        borderColor: "#DDC0B4",
        backgroundColor: "#DDC0B4",
        pointBorderColor: "#DDC0B4",
        pointRadius: 1,
        pointHoverRadius: 2,
        pointBorderWidth: 4,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "top",
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of mentions',
        }
      }],
    }   
  }
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
  dashboardFabricData,
  dashboardFabricDataInstagram,
  dashboardFabricDataJacket,
  dashboardFabricDataJacketInstagram,
  skirtColorFs,
  MotiviMiroglio,
  MotiviOltreFashion,
  MotiviPerte,
  LuxuryBrands,
};