'use client';

import { useSearchParams } from "next/navigation";
import useGetParams from '@/hooks/useGetPrograms';
import { Title as TitleHeader } from '@/app/index';
import Title from '@/app/titles/title/page';
import styles from '@/ui/program.module.css';


const Program = () => {
  const params = useSearchParams();
  const programName = params.get('name');
  const { loading, data } = useGetParams(programName);

  return (
    <>
      {programName && <TitleHeader type={programName} />}
      {
        loading ?
          <div className={styles.container}>Loading ...</div>
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
