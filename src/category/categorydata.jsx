export default function CategoryData(props){
const{image,categorytitle}=props
return(
      <>
    <div className="text-center grid grid-cols-1 justify-items-center ">
        <a href="#"><img src={image} alt="" className="rounded-full " /></a>
        <a href="#"><p className="pt-3 hover:text-red-500 ">{categorytitle}</p></a>
    </div>
    </>  
)
}