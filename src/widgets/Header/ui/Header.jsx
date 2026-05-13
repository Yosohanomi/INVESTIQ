import Container from '../../../shared/ui/Container/Container'
import SVGIcon from '../../../assets/svg/symbol-defs.svg'


export default function Header() {
  return (
    <header>
             <Container>
                 <div>
                     <div>
                         <svg>
                             <use href={`${SVGIcon}#icon-logo`}/>
                         </svg>
                         <p>INVESTIQ</p>
                     </div>

                     <div>
                         <div>
                             U
                         </div>
                         <p>User name</p>
                     </div>

                     <p>Вийти</p>
                     <svg>
                             <use href={`${SVGIcon}#icon-logout`}/>
                         </svg>
                 </div>
             </Container>
         </header>
  )
}
