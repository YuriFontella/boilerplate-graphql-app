import { useEffect, useRef } from 'react'

import { Chart, PieController, DoughnutController, ArcElement, Tooltip } from 'chart.js'

Chart.register(
  DoughnutController,
  PieController,
  ArcElement,
  Tooltip
)

const ChartPie = ({ item }) => {

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      new Chart(ref.current, {
        type: 'pie',
        data: {
          labels: ["Usuários", "Gatos"],
          datasets: [{
            data: [item.users, item.cats],
            backgroundColor: ["#312E81", " #4338CA"]
          }]
        },
      })
    }
  }, [item, ref])

  return (
    <section className="flex items-center justify-center py-8 md:px-4">
      <div className="xl:w-1/3 flex flex-col 2xl:items-center">
        <p className="text-base md:text-xl font-bold leading-tight text-gray-600 dark:text-gray-400 text-center">Total de contas</p>
        <div className="mx-auto flex flex-col items-center">
          <div className="mt-8">
            <canvas ref={ref} />
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between md:justify-start space-x-14">
              <div>
                <p className="text-xs text-gray-700">Usuários</p>
                <p className="text-xl font-bold text-gray-700 dark:text-gray-400">{((item.users / (item.users + item.cats)) * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-700">Gatos</p>
                <p className="text-xl font-bold text-gray-700 dark:text-gray-400">{((item.cats / (item.users + item.cats)) * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChartPie