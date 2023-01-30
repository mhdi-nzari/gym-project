type Props = {
     name :string ,
     desc?: string , 
     image : string , 
}

const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white  transition duration-500 opacity-20 hover:opacity-90`

const Class = ({name , desc , image}: Props) => {
  return (
<li className='relative mx-5 inline-block h-[380px] w-[450px]'>
     <div className={overlayStyles}>
          <p className="mb-5 font-bold text-4xl">{name}</p>
          <p className="mt-5">{desc}</p>
     </div>
     <img src={image} alt={`${image}`} />
</li>
  )
}

export default Class