import React from 'react';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  getX() {
    const {data} = this.props;
    return {
      min: data[0].x,
      max: data[data.length - 1].x
    }
  }
  getY() {
    const {data} = this.props;
    return {
      min: data.reduce((min, p) => p.y < min ? p.y : min, data[0].y),
      max: data.reduce((max, p) => p.y > max ? p.y : max, data[0].y)
    }
  }

  getSvgX(x) {
    const {svgWidth, yLabelSize} = this.props;
    return yLabelSize + (x / this.getX().max * (svgWidth - yLabelSize));
  }
  getSvgY(y) {
    const {svgHeight, xLabelSize} = this.props;
    const gY = this.getY();
    return ((svgHeight - xLabelSize) * gY.max - (svgHeight - xLabelSize) * y) / (gY.max - gY.min);
    }
  // Build SVG path
  makePath() {
    const {data, color} = this.props;
    let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
    pathD += data.map((point, i) => {
      return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
    }).join("");

    return <path className='linechart_path' d={pathD} />
  }
  // Build shaded area
  makeArea() {
    const {data} = this.props;
    let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
    pathD += data.map((point, i) => {
      return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
    }).join("");

    const x = this.getX();
    const y = this.getY();
    pathD += "L " + this.getSvgX(x.max) + " " + this.getSvgY(y.min) + " "
    + "L " + this.getSvgX(x.min) + " " + this.getSvgY(y.min) + " ";

    return <path className="linechart_area" d={pathD} />
  }
  // Build grid axis
  makeAxis() {
    const {yLabelSize} = this.props;
    const x = this.getX();
    const y = this.getY();

    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(x.min) - yLabelSize} y1={this.getSvgY(y.min)}
          x2={this.getSvgX(x.max)} y2={this.getSvgY(y.min)}
          strokeDasharray="5" />
        <line
          x1={this.getSvgX(x.min) - yLabelSize} y1={this.getSvgY(y.max)}
          x2={this.getSvgX(x.max)} y2={this.getSvgY(y.max)}
          strokeDasharray="5" />
      </g>
    );
  }

  makeLabels(){
    const {svgHeight, svgWidth, xLabelSize, yLabelSize} = this.props;
    const padding = 5;
    return(
      <g className="linechart_label">
        {/* Y AXIS LABELS */}
        <text transform={`translate(${yLabelSize/2}, 20)`} textAnchor="middle">
          {this.getY().max.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}
        </text>
        <text transform={`translate(${yLabelSize/2}, ${svgHeight - xLabelSize - padding})`} textAnchor="middle">
          {this.getY().min.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}
        </text>
        {/* X AXIS LABELS */}
        <text transform={`translate(${yLabelSize}, ${svgHeight})`} textAnchor="start">
          { this.props.data[0].d }
        </text>
        <text transform={`translate(${svgWidth}, ${svgHeight})`} textAnchor="end">
          { this.props.data[this.props.data.length - 1].d }
        </text>
      </g>
    )
  }

  render() {
    const {svgHeight, svgWidth} = this.props;

    return (
      <svg  width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} className={'linechart'} >
        <g>
          {this.makeAxis()}
          {this.makePath()}
          {this.makeArea()}
          {this.makeLabels()}
        </g>
      </svg>
    );
  }
}

LineChart.defaultProps = {
  data: [],
  color: '#2196F3',
  pointRadius: 5,
  svgHeight: 300,
  svgWidth: 900,
  xLabelSize: 20,
  yLabelSize: 80
}

export default LineChart;
