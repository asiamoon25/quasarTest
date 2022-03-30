import {cloneDeep} from 'lodash'
export const chartOptionAction = (context,payload) => {

  const options = {

    chart: {
      id: 'vuechart-example',
      type:"line",
      height:"350"
    },
    xaxis: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    }
  }

  const optionClone = cloneDeep(options);

  context.commit('chartOptionMutation',optionClone)
}

export const chartSeriesAction = (context,payload) => {
  const series = [
    {

      name: 'series-1',
      data:[30,40,45,50,49,60,70,91]
    }
  ]

  const seriesClone = cloneDeep(series)

  context.commit('chartSeriesMutation',seriesClone)
}
