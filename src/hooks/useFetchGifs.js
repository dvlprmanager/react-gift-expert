import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]),
    [isLoading, setIsLoading] = useState(true),

    getImages = async ()=>{
       const newImages = await getGifs(category);
       await setImages(newImages);
       setIsLoading(false);
    
    }

    useEffect(() => { 
      getImages();
    }, [])

    return{
        images,
        isLoading
    }

}
