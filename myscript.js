const data=[{id:5692219,feature:'Feature 1',state:'State 1',assu:'User 1',swrmax:'SW01',swrmin:0,swrpat:0,tte:30,ntp:15,ntf:15},{id:5692220,feature:'Feature 2',state:'State 1',assu:'User 2',swrmax:'SW01',swrmin:0,swrpat:0,tte:50,ntp:43,ntf:7},{id:5692221,feature:'Feature 3',state:'State 1',assu:'User 3',swrmax:'SW01',swrmin:0,swrpat:0,tte:60,ntp:57,ntf:3},{id:5692222,feature:'Feature 4',state:'State 1',assu:'User 4',swrmax:'SW01',swrmin:0,swrpat:0,tte:35,ntp:30,ntf:5},{id:5692223,feature:'Feature 5',state:'State 1',assu:'User 5',swrmax:'SW01',swrmin:0,swrpat:0,tte:25,ntp:24,ntf:1},{id:5692224,feature:'Feature 6',state:'State 2',assu:'User 6',swrmax:'SW01',swrmin:0,swrpat:0,tte:40,ntp:28,ntf:12},{id:5692225,feature:'Feature 7',state:'State 1',assu:'User 7',swrmax:'SW01',swrmin:0,swrpat:0,tte:15,ntp:15,ntf:0},{id:5692226,feature:'Feature 8',state:'State 9',assu:'User 8',swrmax:'SW01',swrmin:0,swrpat:0,tte:45,ntp:35,ntf:10},{id:5692227,feature:'Feature 9',state:'State 3',assu:'User 9',swrmax:'SW01',swrmin:0,swrpat:0,tte:10,ntp:10,ntf:0},{id:5692228,feature:'Feature 10',state:'State 4',assu:'User 10',swrmax:'SW01',swrmin:0,swrpat:0,tte:30,ntp:26,ntf:4},{id:5692231,feature:'Feature 11',state:'State 5',assu:'User 11',swrmax:'SW01',swrmin:0,swrpat:0,tte:28,ntp:20,ntf:8},{id:5692232,feature:'Feature 12',state:'State 6',assu:'User 12',swrmax:'SW01',swrmin:0,swrpat:0,tte:36,ntp:35,ntf:1},{id:5692233,feature:'Feature 13',state:'State 9',assu:'User 13',swrmax:'SW01',swrmin:0,swrpat:0,tte:44,ntp:38,ntf:6},{id:5692234,feature:'Feature 14',state:'State 9',assu:'User 14',swrmax:'SW01',swrmin:0,swrpat:0,tte:17,ntp:11,ntf:6},{id:5692235,feature:'Feature 15',state:'State 4',assu:'User 15',swrmax:'SW01',swrmin:0,swrpat:0,tte:8,ntp:5,ntf:3},]
var ctx = document.getElementById("myChart4").getContext('2d');
function sortby(property,propertyval,dict){
  result = dict.filter(obj => obj[property] ===propertyval);
  return result
      }
var temp=0 

function myfunction(labels,data1,data2,label1,label2){
// location.reload()
myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: labels,
		datasets: [{
			label: label1,
			backgroundColor: "red",
			data: data1,
		}, {
			label: label2,
			backgroundColor: "yellow",
			data: data2,
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});
temp=temp+1}
let states=["state1","state2","state3","state4","state5","state6","state7","state8","state9"]
let features=["feature1","feature2","feature3","feature4","feature5","feature6","feature7","feature8","feature9","feature10","feature11"]
let data1=[]
barColors=["#FF6384",
"#63FF84",
"#84FF63",
"#8463FF",
"#6384FF",
"#473C33",
"#3D1766",
"#CD0404",
"#C85C8E"]
for(let i=1;i<10;i++){
  data1.push(sortby("state",`State ${i}`,data).length)
}
console.log(`this is ${data.length}`)
console.log(data1)
data2=[]
data3=[]
data4=[]
for(let i=1;i<12;i++){
  data2.push(sortby("feature",`Feature ${i}`,data)[0]["ntp"])
}
for(let i=1;i<12;i++){
  data3.push(sortby("feature",`Feature ${i}`,data)[0]["ntf"])
}
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var chartdata = {
    labels:states,
    datasets: [
        {
            data: data1,
            backgroundColor:barColors
        }]
};
function pieChart(){
myChart = new Chart(ctx, {
  type: 'pie',
  data: chartdata
});
temp=temp+1
}
function clearchart(){
  location.reload()
  console.log("yes")
}


