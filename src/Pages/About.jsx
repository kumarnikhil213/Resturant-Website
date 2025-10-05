import { Box, Typography } from '@mui/material';
import Layout from '../Components/Layout/Layout'

const About = () => {
  return (
    <Layout>
       <Box 
       sx={{
        my: 15,
        textAlign:'center',
        marginLeft: 5,
        marginRight: 5,
        "& h4":{
          justifyContent: 'center',
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem',

          /* Mobile view*/
          "@media (max-width:600px)":{
            mt: 0,
            "& h4":{
              fontSize:'1.8rem'
            }
          }
        }
       }}
       >
        <Typography variant='h4'
        marginTop={5}
        marginLeft={5}
        justifyContent={'center'}
        alignItems={'center'}

        >
          Welcom to My resturant
           </Typography>
        
         <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa animi necessitatibus pariatur error ipsam unde rem eaque aliquid dolores, reprehenderit laudantium aperiam. Adipisci quisquam enim inventore recusandae laboriosam cupiditate voluptatum officia repellendus, qui asperiores. Eveniet delectus commodi unde quidem incidunt, cumque ad dolor sit nihil soluta! Unde adipisci omnis fuga quae dolorem excepturi quod repellat ipsa. Quae amet voluptatibus totam ut. Perferendis distinctio vel maxime quasi necessitatibus! Velit id optio sapiente repellat officiis omnis, placeat reiciendis enim voluptate, pariatur odio beatae illo debitis voluptatibus error tempora totam cumque asperiores commodi. Quo dolorum, inventore ab corrupti doloremque neque ipsum nostrum sint facere consequatur esse nobis eum ea sed pariatur. Provident, sunt, molestias deleniti ratione ad, incidunt sed dolorum non consequatur quae at. Delectus suscipit accusantium aspernatur similique, sit quos ab cumque nihil eaque qui nulla sed expedita a error illum, dolore provident! Sed odio nam dolores molestiae vitae unde totam ullam quod dignissimos temporibus at doloribus, quis soluta amet nisi ratione rerum placeat. Rem deleniti vero deserunt dolorum atque soluta hic quibusdam magnam. Maxime non voluptatibus quia labore illo deserunt nemo quibusdam praesentium, dolores totam doloremque minima cupiditate! Vero perspiciatis accusantium atque dolor deserunt exercitationem nesciunt nostrum voluptates error reprehenderit quidem, tempora aperiam minus quisquam earum possimus unde fugit ut quia debitis velit maxime nihil? Obcaecati eius similique vitae sed esse unde nobis odio, hic cum maxime cupiditate corporis. Culpa recusandae esse consequatur at fuga hic aut eius ad aliquid reprehenderit quam eaque minus adipisci, totam officia necessitatibus asperiores enim earum tenetur laboriosam. Nulla corporis tempore laboriosam, quos reiciendis ab assumenda quidem cupiditate ipsam nihil in, hic est omnis, nisi veniam laborum. Aspernatur ratione molestiae porro consectetur doloribus commodi, perspiciatis, repellat delectus in quaerat veniam? Voluptas consectetur totam velit quibusdam aperiam officiis cum quam blanditiis. Excepturi inventore maxime quaerat dolor, aut alias adipisci officiis placeat ratione obcaecati exercitationem deleniti iusto repellat at quod ad sint quo provident eum enim non sit maiores quisquam! Iusto facere iste quae odio. Consequuntur asperiores inventore placeat veritatis sapiente maiores soluta enim ducimus ut quaerat! Quibusdam velit quod, ratione esse, adipisci dolores consequatur quaerat modi in voluptate deleniti officia blanditiis magnam illo aperiam distinctio, error voluptates? Vel neque itaque cupiditate porro, necessitatibus saepe iusto voluptatibus, corporis id unde eius numquam voluptate sapiente eligendi quisquam voluptatem facilis autem at. Ea minima asperiores veniam placeat cupiditate, saepe excepturi est beatae. Nulla itaque quod exercitationem tempore quas unde molestias reprehenderit officia incidunt illo ducimus nemo, saepe possimus dolore vel velit beatae voluptates ipsa esse, aliquid dolorum ratione dolorem alias! Blanditiis facere repellendus aspernatur nisi repellat dignissimos veniam, officia, voluptate dolores reiciendis temporibus totam possimus adipisci itaque ex enim fugiat quidem quis provident et laudantium aut voluptatem eaque nam? Exercitationem, alias ipsum? Maiores culpa voluptatem et debitis quis aspernatur omnis vitae minima nisi harum necessitatibus tempore est, assumenda ipsam aperiam quod eos asperiores enim non. Minima modi nesciunt adipisci recusandae qui, inventore nostrum error aspernatur delectus architecto nulla doloribus cum distinctio quasi ex. Debitis dicta doloremque aspernatur non amet.
         </p>
          
        
       </Box>
    </Layout>
  )
}

export default About;