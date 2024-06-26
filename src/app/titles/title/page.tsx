
interface ITitle {
  name: string;
}

const Title: React.FC<ITitle> = ({ name }) => {
  return (
    <div style={{background: "red", maxWidth: 150}}>{name}</div>
  )
}

export default Title;