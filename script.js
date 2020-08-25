d3.select("body").style("background-color", "#3AAFA9")

// add title
d3.select(".title").append("h1").text("D3 Practice").style("color", "#def2f1", "font-size", 6)

// Select Canvas a define svg
const svg = d3.select("#canvas").append("svg").attr("height", 800).attr("width", 800)

// create group
const group = svg.append("g").attr("transform", "rotate(45 200,200)")

// create a circle
group.append("circle").attr("cx", 100).attr("cy", 200).attr("r", 100).attr("fill", "blue")

// create a rectangle
group.append("rect").attr("x", 220).attr("y", 100).attr("height", 200).attr("width", 300).attr("fill", "pink")

// create a triangle

group.append("polygon").attr("points", "540,300 540,100 640,300").attr("stroke", "purple").attr("stroke-width", 4).attr("fill", "skyblue")

// create a line - upper border line
group.append("line").attr("x1", 0).attr("y1", 90).attr("x2", 800).attr("y2", 90).attr("stroke", "red").attr("stroke", "blue").attr("stroke-width", 3)

// create a line - lower border line
group.append("line").attr("x1", 0).attr("y1", 310).attr("x2", 800).attr("y2", 310).attr("stroke", "green").attr("stroke-width", 3)

// create Path
group.append("path").attr("d", "M 550 80 c 40 10, 65 10, 95 80 s 150 150, 180 80").attr("stroke", "blue").attr("stroke-width", 3).attr("fill", "cyan")

//

const dataset = ["M 10 10 C 20 20, 40 20, 50 10", "M 70 10 C 70 20, 110 20, 110 10", "M 130 10 C 120 20, 180 20, 170 10", "M 10 60 C 20 80, 40 80, 50 60", "M 70 60 C 70 80, 110 80, 110 60", "M 130 60 C 120 80, 180 80, 170 60", "M 10 110 C 20 140, 40 140, 50 110", "M 70 110 C 70 140, 110 140, 110 110", "M 130 110 C 120 140, 180 140, 170 110"]

const svg2 = d3.select(".path-container").append("svg").attr("height", 600).attr("width", 800)

svg2
  .selectAll("path")
  .data(dataset)
  .enter()
  .append("path")
  .attr("d", d => d)
  .attr("fill", "transparent")
  .attr("stroke", "red")
  .attr("stroke-width", 3)
