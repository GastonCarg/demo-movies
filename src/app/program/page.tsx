'use client';

import { useSearchParams } from "next/navigation";
import useGetParams from '@/hooks/useGetPrograms';
import { Title as TitleHeader } from '@/app/index';
import Title from '@/app/titles/title/page';

const Program = () => {
  const params = useSearchParams();
  const programName = params.get('name');
  const { loading, data } = useGetParams(programName);

  return (
    <>
      {
        loading ?
          <div>Loading ...</div>
          :
          <>
            {programName && <TitleHeader type={programName} />}
            {
              data && data.map((dt, index) => {
                return (
                  <Title key={index} type='program' program={dt} />
                )
              })
            }

          </>
      }
    </>
  )
}

export default Program;
