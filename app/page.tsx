import Slider from "../Components/Home/Slider"
import HomeCategory from "../Components/Home/HomeCategory";
import CardProductsContainer from "../Components/Products/CardProductsContainer";
 import DiscountSection from "../Components/Home/DiscountSection";
import BrandFeatured from "../Components/Brand/BrandFeatured";
import axiosInstance from "../axiosinstance";
import { GetServerSideProps, NextPage } from "next";
import { Category, NewResponse } from "@/moduls";

 const Home=()=> {
    return (
      <div style={{ minHeight: "670px" }}>
        <Slider />
         <HomeCategory  />
        <CardProductsContainer
          title="الاكثر مبيعا"
          btntitle="المزيد"
          pathText="/prodact/allprodact"
        /> 
        <DiscountSection />
        <CardProductsContainer
          title="احدث الازياء"
          btntitle="المزيد"
          pathText="/prodact/allprodact"
        />
        <BrandFeatured
          title="اقوي الماركات"
          btntitle="المزيد"
          pathText="/brand"
        /> 
      </div>
    );
}
   
// interface DataCategory{
//   category : Category,
// }

// export const getServerSideProps:GetServerSideProps<DataCategory> =async () => {
//   try{
//     const newresponse :NewResponse= await axiosInstance.get(`/api/v1/categories`)
//     return {
//       props: {
//          category:newresponse.data
//       }
//     }
//   }catch(e){
//     console.log(e);
//   } 
// }
export default Home;