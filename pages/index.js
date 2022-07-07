export default function Home() {
  return (
    <div className="">
      in homolog <br/>
      <div className="">NODE_ENV={process.env.NODE_ENV}</div>
      <div className="">NEXT_PUBLIC_ENV_FILE={process.env.NEXT_PUBLIC_ENV_FILE}</div>
    </div>
  )
}
