//npm install axios
import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "e7ed3b39fe112d7e93d03c19325305e0";
const count = 5;
const url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1&privacy_filter=1`;  


function Flickr(){   
  let [items, setItems] = useState([]);
  let [loading, setLoading]  = useState(false);

  const getFlickr = async ()=>{
    try {
      const data = await axios.get(url)
        .then(item=>{
          const photos = item.data.photos.photo;
          setItems(photos);
        });

        setLoading(true);
    }
    catch (err){
      console.error(err);
    }
  }

  useEffect(()=>{
    getFlickr();
  },[]);  

  const Lists = ()=>{
    return(
      items.map((data,index)=>{
        let imgSrc =`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
     
        return (  
          <article key={index}>
            <div className="inner">
              <div className="pic">               
                <img src={imgSrc} />
              </div>
              <p>{data.title}</p>
            </div>
          </article>          
        )
      })
    )
    
  }
  
  return (
    <main>
      <h1>Flickr Gallery</h1>

      <section>
        {loading ? <Lists /> : <p>로딩중</p>}
      </section>        
    </main>
  )
}

export default Flickr;