import { getDocs, collection } from 'firebase/firestore';
import React, { useState, useEffect } from "react";
import {db} from "../firebase-config";

function Home() {
    const[postList, setPostList] = useState([]);
    const postCollectionRef = collection(db "post");

    useEffect (() => {
        const getPost = async () => {
            const data = await getDocs(postCollectionRef);
            console.log(data);
        };
        getPost();
    })
});
    return  <div className='Homepage'> </div>;


export default Home;