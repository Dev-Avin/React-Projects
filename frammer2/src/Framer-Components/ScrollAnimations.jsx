import { useScroll , motion, useSpring } from 'framer-motion'
import React from 'react'

const ScrollAnimations = () => {
    const {scrollYProgress} = useScroll();
    const scaleX =useSpring(scrollYProgress);
    
  return (
    <div >
        <motion.div
         style={{
            scaleX : scaleX,
            background: 'blue',
            transformOrigin:"left",
            position:"sticky",
            top:0,
            width:'100%',
            height:'24px',
         }}
        />
        <div 
         style={{
            maxWidth:'700px',
            margin:'auto',
            padding:'1.2rem'
         }}
        >

        <h1><p>vsdfgvsfg</p></h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, sunt animi iste deleniti quis modi earum. Sed fugit itaque totam quas quis sit perferendis enim molestias a, nostrum eos obcaecati repellendus tenetur distinctio, eius nobis voluptas quam? Animi minima iusto natus ipsa autem, quaerat provident accusamus quisquam pariatur illo maiores ipsam necessitatibus consectetur accusantium consequuntur a in ad recusandae nostrum veniam quod. Repellat repudiandae odit quae tempore possimus corporis distinctio quis deleniti et facere perspiciatis est sapiente blanditiis nobis placeat pariatur adipisci, similique eveniet vitae rem culpa unde. Maxime?
        </p>
        

        </div>
    </div>
  )
}

export default ScrollAnimations