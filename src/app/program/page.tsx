'use client';

import { useSearchParams } from "next/navigation";
import useGetParams from '@/hooks/useGetPrograms';
import { Title as TitleHeader } from '@/app/index';
import Title from '@/app/titles/title/page';
import styles from '@/ui/program.module.css';
import { useEffect, useState } from "react";


const Program = () => {
  const [withError, setWithError] = useState<boolean>(false);
  const params = useSearchParams();
  const programName = params.get('name');
  const { loading, data, error } = useGetParams(programName);

  useEffect(() => {
    if (error || !data?.length) setWithError(true);
    else setWithError(false);
  }, [data])

  return (
    <>
      {programName && <TitleHeader type={programName} />}
      {
        loading ?
          <div className={styles.container}>
            <p>
              Loading ...
            </p>
          </div>
          :
          withError ?
            <div className={styles.container}>
              <p>
                Oops, something went wrong...
              </p>
            </div>
            :
            <div className={styles.container}>
              {
                data && data.map((dt, index) => {
                  return (
                    <Title key={index} type='program' program={dt} />
                  )
                })
              }
            </div>
      }
    </>
  )
}

export default Program;
