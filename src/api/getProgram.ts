import { IProgram } from "@/lib/types";

export async function getProgram(name: string) {
  const nameToLower = name.toLocaleLowerCase();
  try {
    const url = '/sample.json';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const data = json.entries.filter((program: IProgram) => program.programType === nameToLower);
    return data;
  } catch (error) {
    console.log({error})
  }
}