// usado para exemplo
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  // crie um gráfico inicial vazio
  var ctx_live = document.getElementById("mycanvas");
  var myChart = new Chart(ctx_live, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderWidth: 1,
        borderColor:'#00c0ef',
        label: 'liveCount',
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
  

  // este id de Post direciona os dados de exemplo
  var postId = 1;
  

  // lógica para obter novos dados
  var getData = function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments',
      success: function(data) {
        // processar seus dados para extrair oq vc deseja
        // e.g. new label and a new data point
        
        // adicionar novos rótulos e pontos de dados a estrutura de dados subjacente
        myChart.data.labels.push("Post " + postId++);
        myChart.data.datasets[0].data.push(getRandomIntInclusive(1, 25));
        
        // re-render the chart
        myChart.update();
      }
    });
  };
  

  // get new data every 3 seconds
  setInterval(getData, 3000);