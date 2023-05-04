import Image from 'next/image'

const About = () => {
    return(
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

            <section>
                <div className='header'>
                    <h1><u>About</u></h1>
                </div>
                <div className="cardGrid">
                    <div className='header'>
                        <h3>My Hobbies</h3>
                    </div>
                    <div className="card item1">
                        <img className="card-img-top" src="/Chess.jpg" alt="Chess" />
                        <div className="card-body">
                            <p className="card-text">One of my hobbies is playing <b><u>Chess</u></b> because it develops my cognitive skills.</p>
                        </div>
                    </div>
                    <div className="card item2">
                        <img className="card-img-top" src="/Valorant.jpg" alt="Chess" />
                        <div className="card-body">
                            <p className="card-text">I also love to play <b><u>Online Games such as Valorant</u></b></p>
                        </div>
                    </div>
                    <div className="card item3">
                        <img className="card-img-top" src="/Cycling.jpg" alt="Chess" />
                        <div className="card-body">
                            <p className="card-text">I sometimes ride a bike and enjoy the beautiful sceneries and unwind from stress and tensions through <b><u>Cycling</u></b>.</p>
                        </div>
                    </div>
                </div>
                
            </section>
            {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                
            </div> */}
        </div>
      </main>
    </>
   )
}

export default About