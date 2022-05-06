import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowCard } from "../../components"


const WorkPage = () => {

    const { name } = useParams();
    const[showData, setShowData] = useState({ rating: {}, image: {} }); //curly brackets because we're going to return an object

    useEffect(() => {

        async function getShowData(name) {

           try {
               const result = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
               setShowData(result.data)
           } catch(err) {
               console.error(err);
           }
        }
        getShowData(name);

    }, [name])

    return    <ShowCard 
                name={showData.name}
                summary={showData.summary}
                image={showData.image}
                rating={showData.rating}
                />
        
    
}

export default WorkPage;