'use client'
import { useEffect,useState } from "react";
import notify from "../../Components/useNotfiction";
import axiosInstance from "@/axiosinstance";


function adminaddProdactHook() {
    const [prodname,setProdname]=useState("");
    const [prodiscrb,setProdiscrb]=useState("");
    const [pricebefor,setPricebefor]=useState("السعر قبل الخصم");
    const [priceafter,setPriceafter]=useState("السعر بعد الخصم");
    const [qty,setQty]=useState("الكمية المتاحة للمنتج");
    const [catId,setCatid]=useState('');
    const [brandid,setBrandid]=useState('');
    const [loadind,setLoading]=useState(true);
    const [selectsubCatid,setSelectubCatid]=useState([]);
    const [showcolor,setShowcolor]=useState(false);
    const [colors, setColors] = useState([]);
    const [images, setImages] = useState([]);
    const [options, setOptions] = useState([]);

    // useEffect(()=>{
    //     try{
    //         const res = axiosInstance.get("/api/v1/categories")
    //         console.log(res.date);
    //     }catch(error){
    //         console.log('Error', error);
    //     }
    // },[]);
    const handelnameprodact =(e)=>{
        setProdname(e.target.value)
    }
    const handeldaescrprodact =(e)=>{
        setProdiscrb(e.target.value)
    }
    const handelpricbeforprodact =(e)=>{
        setPricebefor(e.target.value) 
    }
    const handelpricafterprodact =(e)=>{
        setPriceafter(e.target.value)
    }
    const handelQTYprodact =(e)=>{
        setQty(e.target.value)
    }

const info ={handelnameprodact,handeldaescrprodact,handelpricbeforprodact,handelpricafterprodact,handelQTYprodact}
 
return info 
}

export default adminaddProdactHook
