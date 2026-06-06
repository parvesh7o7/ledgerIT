import './Home.css';
import { motion } from "motion/react"
function Home() {
    return (
        <>
            <div className="welcome-title h-screen relative">
                <motion.h1 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-center"

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
                >Welcome to <span className='italic bg-linear-65 from-pink-200 to-pink-400 text-transparent bg-clip-text block'>the World of Business</span></motion.h1>
            </div>

            <motion.div className="table-container bg-blue-950 p-7 mt-10"
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
                <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium totam alias sint voluptas sunt rem porro soluta illum, saepe et animi! Provident itaque porro delectus consequatur maxime aperiam quia dolores, culpa sed tempora alias saepe sunt quidem, nulla ducimus repudiandae quibusdam quod ex iure corrupti. Amet distinctio officiis illum modi. Necessitatibus minus exercitationem, harum possimus nostrum asperiores. Facere veniam assumenda ea illum excepturi ratione quidem, aliquid error laborum obcaecati similique harum, sit voluptas vel sapiente odit neque odio debitis illo ex. Veritatis aperiam at iusto quo magnam, eligendi suscipit. Magnam expedita pariatur, enim amet sit minima dignissimos voluptates nostrum quod eos commodi nemo hic quasi sunt exercitationem sed cum aliquid beatae eum repellendus consequuntur quam iusto omnis! Magnam dolor iste impedit velit sunt. Aperiam, qui ullam. Sapiente, eveniet magni odio iusto eaque rerum adipisci possimus, nisi architecto nobis voluptatibus odit? Quaerat possimus necessitatibus dignissimos, molestiae consectetur est. Quibusdam quaerat rem, cumque natus, dignissimos reiciendis perspiciatis eligendi consectetur explicabo, nam placeat blanditiis. Fuga nihil blanditiis consectetur veritatis eligendi accusamus, reprehenderit ipsam iure dicta quis, enim nemo in odio ad quia quasi reiciendis facilis. Nostrum ab corrupti harum quod recusandae. Minima neque laborum, distinctio delectus sint amet laudantium eligendi et facilis <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio nemo voluptas eius quam officiis velit ipsum! Architecto sequi deleniti magnam nostrum perspiciatis possimus numquam a voluptatibus quas laboriosam. Iste nemo debitis assumenda laudantium animi vel delectus dolores! Sint quaerat nesciunt eaque sed blanditiis ipsam voluptatum nostrum, qui repudiandae quos neque, saepe officiis dolore iure, at corporis distinctio? Quam provident eius doloribus! Repellendus nobis inventore reiciendis sunt sint perferendis quo dolorem illo sapiente, id tempora mollitia laudantium, alias eum nam voluptas ipsum expedita fuga ex ducimus. Deleniti suscipit perspiciatis, nemo asperiores aperiam, aliquid accusantium eaque laboriosam adipisci eius omnis! Sapiente repellendus, facilis tempora laudantium quod aliquam nam repudiandae dolore ab. Libero veritatis error voluptatem expedita recusandae explicabo asperiores, ab quis consequatur, labore quae aliquid saepe pariatur laudantium enim aperiam earum aut temporibus impedit suscipit accusamus! Sapiente ullam repellat sunt quam voluptas aspernatur. Cum aliquid voluptatum unde reprehenderit, numquam amet ullam quisquam, laboriosam quaerat rerum soluta nesciunt quam dolor veniam totam laborum vel suscipit illum, impedit sunt velit fuga. Consequuntur aut reiciendis, enim voluptates doloremque qui beatae ab error iure. <br /><br /></p>
            </motion.div>
        </>
    )
}
export default Home;