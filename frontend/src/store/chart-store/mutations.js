import {cloneDeep} from "lodash";

export const chartOptionMutation = (state,opened) => {
  const options = {

    chart:{
      id:'chart-id'
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

  state.options = cloneDeep(options)
};
export const chartSeriesMutation = (state,opened) => {
  const series = [
    {

      name: 'series-1',
      data:[30,40,45,50,49,60,70,91]
    }
  ]

  state.series =  cloneDeep(series)
}
