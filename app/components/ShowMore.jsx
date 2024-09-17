import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }) => {
   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 20;

      setLimit(newLimit);
   };

   return (
      <div className="w-full flex justify-center items-center gap-5 ">
         {!isNext && (
            <CustomButton
               title="Show More"
               btnType="button"
               containerStyles="bg-blue "
               handleClick={handleNavigation}
            />
         )}
      </div>
   );
};

export default ShowMore;
