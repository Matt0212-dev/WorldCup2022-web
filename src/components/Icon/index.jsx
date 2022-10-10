import {ReactComponent as arrowLeft} from './../../../public/assets/icones/arrow-left.svg'
import {ReactComponent as arrowRight} from './../../../public/assets/icones/arrow-right.svg'
import {ReactComponent as back} from './../../../public/assets/icones/back.svg'
import {ReactComponent as profile} from './../../../public/assets/icones/profile.svg'

const icons = {
    arrowLeft,
    arrowRight,
    back,
    profile  
}

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    return <Element {...props}/>
}
    
