export function Header (props: { title: string }) {
  return (
    <div className="py-8 px-10 text-lg font-bold font-['Poppins',sans-serif] ">
      <h1>{props.title}</h1>
    </div>
  )
}
