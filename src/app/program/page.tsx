'use client';

import { useSearchParams } from "next/navigation";
import useGetParams from '@/hooks/useGetPrograms';
import { Title } from '@/app/index';

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
            {programName && <Title type={programName} />}
            {
              data && data.map((dt) => {
                return (
                  <div>{dt.title}</div>
                )
              })
            }

          </>
      }
    </>
  )
}

export default Program;
