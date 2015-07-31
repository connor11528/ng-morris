ngMorris
========

This repo is NO LONGER MAINTAINED. I suggest you use [angular-morris-chart](https://github.com/stewones/angular-morris-chart) for your dynamic charting needs.

### Documentation

directives: `bar-chart`, `line-chart`, `donut-chart`

The options passed to each are listed in the examples below. Attach the data to your controllers scope and `ngMorris` will watch for changes

`bower install ngmorris --save`

index.html:
`<script src='bower_components/ngMorris/src/ngMorris.js'></script>`

Then include it as a dependecy:

`angular.module('myApp', ['ngMorris'])`

Line chart example:

```
<div line-chart 
	line-data='groupedByMonth' 
	line-xkey='month' 
	line-ykeys='["total"]'
	line-labels='["Total violations"]'
    line-colors='["#31C0BE","#7a92a3"]'></div>
```

Bar chart example:

```
<div bar-chart 
	bar-data='categories' 
	bar-x='violation_category' 
	labels='["violation categories","number of violations"]'
	bar-y='["number_violations"]'></div>
```

Donut chart example:

```
<div donut-chart
	donut-data='percentages'></div>
```

## Data format

# Line

```
line-data: [
	{ xlabel: 'str', yvalue1: num, yvalue2: num },
	{ xlabel: 'str', yvalue1: num, yvalue2: num }
	// etc
]

line-xkey: 'xlabel'
line-ykeys: ['yvalue1', 'yvalue2']
line-labels: ['Value 1', 'Value 2']
line-colors: ['#31C0BE', '#7a92a3']
```
