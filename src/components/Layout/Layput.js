import classes from './Layout.module.css';

const Layout = (props) => {
   console.log(props.urlBg)
   return (
      <>
         <section className={classes.root} >
            <div className={classes.wrapper} style={{ backgroundImage: `${props.urlBg}`, background: `${props.colorBg}` }}>
               <article>
                  <div className={classes.title}>
                     <h3>{props.title}</h3>
                     <span className={classes.separator}></span>
                  </div>
                  <div className={[classes.desc, classes.full].join('')}>
                     <p>{props.desc}</p>
                  </div>
               </article>
            </div>
         </section>
      </>
   )
}

export default Layout;