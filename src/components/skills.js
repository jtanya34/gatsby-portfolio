import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { Heading, Div } from "../styled-system/index"

const Skills = () => {
  const options = (Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "Skills",
        colorByPoint: true,
        data: [
          {
            name: "Javascript",
            y: 62.74,
          },
          {
            name: "ReactJS",
            y: 60.57,
          },
          {
            name: "HTML",
            y: 60.23,
          },
          {
            name: "CSS 3",
            y: 50.58,
          },
          {
            name: "Gatsby",
            y: 30.02,
          },
          {
            name: "Deployment Tools",
            y: 40.92,
          },
          {
            name: "Testing Tools",
            y: 50.62,
          },
        ],
      },
    ],
  })

  return (
    <Div textAlign="center" width="100%">
      <Heading mt={3}>My skills</Heading>
      <Div
        width="100%"
        boxShadow="2px 0px 3px 0px hsla(0, 0%, 0%, 0.2)"
        bg="black"
      >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Div>
    </Div>
  )
}
export default Skills
