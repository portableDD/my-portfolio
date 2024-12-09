type Icon = {
    children : React.ReactNode
}

const ContactCircle = ({children}: Icon) => {
  return (
    <div className="border border-peach rounded-full w-14 h-14 text-3xl text-peach flex justify-center items-center">
        {children}
    </div>
  )
}

export default ContactCircle