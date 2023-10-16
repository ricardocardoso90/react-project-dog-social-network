// import styles from '../UserStats/UserStats.module.scss';
import { Head } from "../../../Components/Helpers/Head/Head";

import { useFetch } from '../../../Hooks/useFetch';
import { Suspense, lazy, useEffect } from 'react';
import { GET_STATS } from '../../../api';
import { Loading } from '../../../Components/Helpers/Loading/Loading';
import { Error } from '../../../Components/Helpers/Error/Error';
// import { UserStatsGraphs } from '../UserStatsGraphs/UserStatsGraphs';

const UserStatsGraphs = lazy(() => import('../UserStatsGraphs/UserStatsGraphs'));

export function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data} />
      </Suspense>
    )
  else return null;
}