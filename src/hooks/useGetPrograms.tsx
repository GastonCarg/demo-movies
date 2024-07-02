import { useEffect, useState } from "react";
import { getProgram } from "@/api/getProgram";
import { delay } from '@/lib/delay';
import { IProgram } from "@/lib/types";

const useGetProgram = (name: string | null) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IProgram[] | null>(null);

  async function getProgramsApi(name: string) {
    setLoading(true);
    const programs = await getProgram(name);
    setData(programs);

    setLoading(false);
  }

  useEffect(() => {
    if (name) {
      getProgramsApi(name)
    }
  }, [name])

  return { data, loading };
}

export default useGetProgram;