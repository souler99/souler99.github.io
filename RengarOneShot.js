changeFunc() {
    var x = document.getElementById("selectADC").value ;
    document.getElementById("stats").innerHTML = "hi" + x;
}

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>my first line chart</title>
</head>
   
<body>
<div id="myChart"></div>
   
<script type="text/javascript" src="arcadiacharts/arcadiacharts.nocache.js">
</script>
<script type="text/javascript">
   
document.onChartLibLoaded = function() {
    // Your Data in CSV-Format
    var myData = "Month,Max Temperature, Min Temperature, Precipitation\n"+
                "Jan, 26.7, 18.7, 90.2\n"+
                "Feb, 26.9, 18.6, 56.1\n"+
                "Mar, 27.6, 19.6, 55.9\n"+
                "Apr, 28.2, 20.4,  39.1\n"+
                "May, 29.3, 21.3, 28\n"+
                "Jun, 30.3, 22.3, 12.7\n"+
                "Jul, 30.8, 23.1, 15\n"+
                "Aug, 31.5, 23.4, 11.2\n"+
                "Sep, 31.4, 23.1, 19.8\n"+
                "Oct, 30.5, 22.4, 57.9\n"+
                "Nov, 28.9, 21.3, 76.2\n"+
                "Dec, 27.3, 19.4, 96.5\n";
   
    // Chart creation with ChartBuilder
    new ac.ACLineChartBuilder()
        .setTitle("Climate at Honolulu, Hawaii")
        .setData(myData)
        .build()
        .addToDom('myChart');
}
</script>
   
</body>
