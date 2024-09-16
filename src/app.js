import React , {lazy,Suspense, useCallback,  useState, useRef, memo, useMemo, useEffect} from "react";
// import { Routes, Route, Link } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import { debounce } from 'lodash';
import InputItem from "./inputItem";
import Tab from "./tab";
import HomePage from "./HomePage";
import ChatPage from "./Chant";


const App = () => {
    const [showModal, toggleModal] = useState(false);
    const [currentTabIndex, setIndex] = useState(1);
    // const handleChange = (newIndex) => {
    //     setIndex(newIndex);
    // }
    const [photos, setPhotos] = useState();
    const [inputData, setInputData] = useState('');
    const [data, setData] = useState();

    const fetchData = useMemo(() =>debounce(async (searchString) => {
        const response = await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
        console.log('respo', response);
        const data = await response.json();
        console.log(data)
        setData(data?.results);
    }, 3000), [])

    useEffect(() => {
        return () => fetchData?.cancel()
    }, [])
    // useEffect(( )=> {
    //     const fetchData = async () => {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    //         console.log('respo', response);
    //         const data = await response.json();
    //         console.log(data)
    //         setPhotos(data);
    //     }
    //     fetchData();
    // }, [])
    const handleInput = (e) => {
        const value = e?.target?.value;
        setInputData(value);
        fetchData(value)
    }
    return <>
        <input type="text" value={inputData} onChange={handleInput}/>
        <ul>
        {data && data?.length && data.map((item) => <li key={item?.created}>{item?.name} </li>)}
        </ul>
        
        {/* {photos && photos?.length ? photos.map((pic) => <img key={pic?.id} loading="lazy" height={200} width={200} src={pic?.url} alt={pic?.title}/>) : <span>No photos found</span>} */}
        {/* <Link to="/">Travel Home</Link>
        <Link to="/about">Travel About</Link>
        <Link to="/contact">Travel Con</Link>
        <Routes>

            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/about" element={<div>About</div>}></Route>
            <Route path="/contact" element={<div>Contact</div>}></Route>
        </Routes> */}
{/* 
         <div className="App">
            <InputItem 
            renderTextBelow ={(text) => <>The value is {text}</>}
            />
            <br/>
            <InputItem 
            renderTextBelow ={(text) => <>Multiplied value is {text * 10}</>}
            />
        </div> */}

{/*        
        <Tab currentTab={currentTabIndex} onChange={handleChange}>

            <Tab.HeadsContainer>Hello

                <Tab.Item label="tab1" index={1}/>
                <Tab.Item label="tab2" index={2}/>
                <Tab.Item label="tab3" index={3}/>
            </Tab.HeadsContainer>
            <Tab.ContentContainer>
                <Tab.ContentItem index={1}>
                    <h1> I am content 1</h1>
                </Tab.ContentItem>
                <Tab.ContentItem index={2}>
                    <h1> I am content 2</h1>
                </Tab.ContentItem>
                <Tab.ContentItem index={3}>
                    <h1> I am content 3</h1>
                </Tab.ContentItem>
            </Tab.ContentContainer>
        </Tab>
         */}

       
         <div>

            {/* <HomePage/>
            <br/>
            <ChatPage/> */}
         </div>
    </>
}

export default App;   