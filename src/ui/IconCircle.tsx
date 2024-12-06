type Icon = {
    children : React.ReactNode
}

const IconCircle = ({children}: Icon) => {
  return (
    <div className="border border-peach rounded-full w-8 h-8 text-lg flex justify-center items-center">
        {children}
    </div>
  )
}

export default IconCircle