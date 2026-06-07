import './Home.css';
import Aurora from '../src/component/Aurora.jsx';
import { motion } from "motion/react"
import vdo from '../assets/bg-video.mp4'
function Home() {
    return (
        <>
            <div className="welcome-section relative h-screen">
                <div className="welcome-bg absolute w-full h-full -z-1">
                    <Aurora />
                </div >
                <motion.div className="welcome-title h-full w-full absolute flex flex-col justify-center items-center"
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    <h1 className="text-7xl font-bold text-center"
                    >Welcome to <span className='bg-linear-to-r from-[#00F2FE] via-[#38BDF8] to-[#A18CD1] py-2 text-transparent bg-clip-text block'>the World of LedgeIT</span></h1>
                    <p className="text-center text-xl font-bold italic m-8 text-gray-400">Track who owes what, automatically.<br />No spreadsheets required.</p>
                    <button className='bg-[#00368d] rounded-3xl p-3 text-2xl w-xl font-semibold text-[#E0F2FE] hover:bg-[#004dc9] hover:scale-95 transition duration-200 ease-out'>Get Started</button>
                </motion.div>
            </div >
            <motion.div className="dashboard-container mt-10 flex flex-col h-screen relative"
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    ease: "easeIn",
                    duration: 1
                }}
            >
                <div className="bg-video -z-1 w-full h-full">
                    <video src={vdo} autoPlay loop muted className='w-full h-full object-cover opacity-25'></video>
                </div>

                <div class="absolute inset-0 z-0 bg-linear-to-b from-[#000000ce] via-transparent to-[#0B0F19] pointer-events-none"></div>

                <div className="summary-card flex flex-row w-full h-[50%] absolute top-0 p-10 z-1">
                    <div className="lent-container w-[50%] p-7 bg-yellow-300/30 rounded-3xl m-4 backdrop-blur-xl shadow-sky-950/20">
                        <h3 className='text-center text-3xl font-extrabold'>Total Lent</h3>
                        <hr />
                        <p>$8000</p>
                        <p>Recent Transaction : <span>$700 to Joshua</span></p>
                    </div>
                    <div className="borrow-container w-[50%] p-7 bg-blue-600/30 rounded-3xl m-4 backdrop-blur-xl shadow-sky-950/20">
                        <h3 className='text-center text-3xl font-extrabold'>Total Borrow</h3>
                        <hr />
                        <p>$4000</p>
                        <p>Recent Transaction : <span>$60 from James</span></p>
                    </div>
                </div>
                <div className="summary-graph border-2 border-green-300 h-[80%]">

                </div>
            </motion.div>
        </>
    )
}
export default Home;