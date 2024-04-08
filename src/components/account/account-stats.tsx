'use client'

import React, { useEffect, useState } from 'react'
import styles from './account-stats.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
import { StatsData } from '@/actions/stats-get'

type GraphData = {
  x: string
  y: number
}

export default function AccountStats({ data }: { data: StatsData[] }) {
  const [graph, setGraph] = useState<GraphData[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acumulador, acesso) => acumulador + acesso, 0)
    )
    setGraph(graphData)
  }, [data])

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, right: 80, left: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#FFF',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  )
}
