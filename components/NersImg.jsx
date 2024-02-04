import Image from "next/image"
const NersImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Nurse" />
    </div>
  )
}

export default NersImg