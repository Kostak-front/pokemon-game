import classes from './Layout.module.css';
import cn from 'classnames';

const Layout = ({ title, urlBg, colorBg, children }) => {
   const sectionStyle = {}

   if (urlBg) {
      sectionStyle.backgroundImage = `url(${urlBg}`
   }

   if (colorBg) {
      sectionStyle.background = colorBg
   }

   return (
      <section className={classes.root} style={sectionStyle}>
         <div className={classes.wrapper}>
            <article>
               <div className={classes.title}>
                  <h3>{title}</h3>
                  <span className={classes.separator}></span>
               </div>
               <div className={cn(classes.desc, classes.full)}>
                  {children}
               </div>
            </article>
         </div>
      </section>
   )
}

export default Layout;
