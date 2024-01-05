import React from 'react'

const Menucard = ({ menuDatavalue }) => {
    console.log(menuDatavalue)
    return (
        <>
           

            <section className='main-card--cointainer'>
                {menuDatavalue.map((curElmnt) => {

                    return (

                        <>

                            <div className='card-container'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{curElmnt.id}</span>
                                        {/* <span className='card-author subtile' style={myStyle}>Breakfast</span> */}
                                        <span className='card-author subtile'>{curElmnt.category}</span>
                                        <h2 className='card-title'>{curElmnt.name}</h2>
                                        <span className='card-description'>
                                        {curElmnt.description}
                                        </span>
                                        <div className='card-read'> Read </div>
                                    </div>


                                    <img src={curElmnt.image} alt="images" className='card-media' />
                                    <span className='card-tag subtle'>Order Now</span>


                                </div>
                            </div>
                        </>

                    )

                })}

            </section>

        </>
    )
}

export default Menucard
