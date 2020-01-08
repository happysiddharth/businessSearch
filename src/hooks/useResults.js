import {useEffect,useState} from 'React';
import yelp from "../api/yelp";

export default ()=>{
    const [result,setResult] = useState([]);
    const [error,setErrorMessage] = useState([]);
    const searchApi = async (searchTerm)=>{
        try
        {
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'san jose'
                }
            });
            setResult(response.data.businesses);
            console.log(response.data.businesses);
        }catch (e) {
            setErrorMessage("Oops!something went wrong");
        }

    };
    useEffect(()=>{
        searchApi("pasta");
    },[]);
    return [error,searchApi,result];
};