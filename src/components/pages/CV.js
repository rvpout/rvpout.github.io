import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Cv from '../Cv';

/*export default function CV() {
    return <h1 className="CV">CV</h1>; 
}
*/

function CV () {
    return (
        <>
            <Cv />
            <Footer />
        </>
    );
}

export default CV;