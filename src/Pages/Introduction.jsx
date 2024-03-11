import { motion } from "framer-motion"
export function Introduction(){
    return(
        <>
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} className="h-screen w-screen fixed top-0 bg-black">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dolores illo nulla pariatur perferendis aliquam ducimus velit voluptatem, sit explicabo vero dolorem laudantium, ullam facere inventore laborum deserunt quae. Non quos delectus magnam dolorem nulla voluptatibus error quo, deserunt modi accusamus. Perspiciatis, optio. Magnam laborum nisi repudiandae quis veritatis molestiae provident expedita facilis facere culpa fuga, illum beatae deserunt quidem porro dicta voluptas cupiditate doloremque quasi est optio nam explicabo. Repellat illum sint tempora debitis quam velit unde, illo excepturi aspernatur aliquid nisi, quae earum voluptate officia est libero, ex consectetur corrupti dolor asperiores hic iusto delectus dolorum. Magni, tempora.
        </motion.section>
        </>
    )
}