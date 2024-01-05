import ControlledComponent from './components/form'
import Resturant from './components/resturant';
import Example from './components/example'
import Login from './components/login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';

const App = () => {
    return (
        <>

            <Example/>
            {/* <Resturant/> */}
            {/* <ControlledComponent/> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                </Routes>
            </BrowserRouter> */}

        </>
    )
}
export default App;