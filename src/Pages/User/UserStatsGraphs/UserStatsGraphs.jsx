/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styles from './UserStatsGraphs.module.scss';
import { useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

export function UserStatsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const graphData = data.map((item) => {
      return ({
        x: item.title,
        y: Number(item.acessos)
      })
    });

    // setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0));

    setTotal(data.map(({ acessos }) => {
      return (Number(acessos))
    }).reduce((a, b) => a + b, 0));

    // console.log(data);
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graphs} anime-left`}>
      <div className={`${styles.total} ${styles['graph-item']}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles['graph-item']}>
        {/* <VictoryPie data={graph} /> */}
        <VictoryPie
          data={[
            { x: 'Abby', y: 5 },
            { x: 'Ellie', y: 10 }
          ]}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={
            {
              data: { fillOpacity: .9, stroke: '#FFF', strokeWidth: 2 },
              labels: { fontSize: 14, fill: '#333' }
            }
          }
        />
      </div>
      <div className={styles['graph-item']}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  )
}