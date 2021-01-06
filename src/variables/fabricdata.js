const dashboardFabricData = {
    data: (canvas) => {
      return {
        labels: ['COTTON WOOL',
        'LEATHER',
        'DENIM',
        'LACE',
        'PAILLETTES_STRASS'],
        datasets: [
          {
            label: "Top Colors",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
            
            borderWidth: 0,
            data: [0.7305,0.2284,0.0344,0.0061,0.0003],
           
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
        enabled: true,
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
            data: [0.5804,0.3793,0.0344,0.0057
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
            data: [0.3376,0.4285,0.1298,0.0649,0.0389
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
            data: [0.375
              ,0.2764,0.1408,0.1461,0.0616],
           
          },
        ],
      };
    },
    options: {
      legend: {
        display: false,
      },
    //   datalabels: {
    //     display: true,
    //     color: "white",
    //   },
      pieceLabel: {
        render: "percentage",
        fontColor: ["white"],
        precision: 2,
      },
  
      tooltips: {
        enabled: true,
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
  

  const dressFabricDatafs = {
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
            data: [0.8477,0.1181,0.0236,0.0104
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

  const dressFabricDatain = {
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
            data: [0.3421,0.2631,0.0526,0.2631,0.0789
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
  
  
  const jumpFabricDatafs = {
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
            data: [0.7368,0.2315,0.0263,0.0052
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

  const jumpFabricDatain = {
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
            data: [0.3043,0.2608,0.0869,0.2173,0.1304],
           
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
  

  const kimonoFabricDatafs = {
    data: (canvas) => {
      return {
        labels: ['cotton_wool',
        'leather',
        'denim',
        'lace',
        'pailettes_strass',
        ],
        datasets: [
          {
            label: "Top Colors",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
            
            borderWidth: 0,
            data: [0.6456,0.3009,0.0388,0.0097,0.0048
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

  const kimonoFabricDatain = {
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
            data: [0.4090,0.1818,0.0909,0.1363,0.1818],
           
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
  
  const pantsFabricDatafs = {
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
            data: [0.6888,0.2685,0.0388,0.0037
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

  const pantsFabricDatain = {
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
            data: [0.3963,0.1351,0.2972,0.1171,0.0540 ],
           
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
  
  const skirtFabricDatafs = {
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
            data: [0.8149,0.1683,0.0124,0.0041
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

  const skirtFabricDatain = {
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
            data: [,0.5
              ,0.25
              ,0.0416
              ,0.1666,0.0416],
           
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
  
  const topFabricDatafs = {
    data: (canvas) => {
      return {
        labels: ['cotton_wool',
        'leather',
        
        ],
        datasets: [
          {
            label: "Top Colors",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "red"],
            
            borderWidth: 0,
            data: [0.9333,0.0666
           
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

  const topFabricDatain = {
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
            data: [0.2682,0.3414,0.1219,0.1951,0.0731],
           
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

module.exports = {
    dashboardFabricData,
    dashboardFabricDataInstagram,
    dashboardFabricDataJacket,
    dashboardFabricDataJacketInstagram,
    dressFabricDatafs,
    dressFabricDatain,
    jumpFabricDatafs,
    jumpFabricDatain,
    skirtFabricDatafs,
    skirtFabricDatain,
    pantsFabricDatafs,
    pantsFabricDatain,
    kimonoFabricDatafs,
    kimonoFabricDatain,
    topFabricDatafs,
    topFabricDatain
  };