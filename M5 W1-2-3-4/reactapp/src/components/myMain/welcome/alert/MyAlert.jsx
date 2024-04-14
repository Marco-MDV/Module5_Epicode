import mainStyle from '../../mainStyle.module.css'
import { Alert } from 'react-bootstrap'

export default function MyAlert() {
    const removeAlert = () => {
        document.querySelector('.myAlert').classList.add('d-none')
    }
    return (
        <Alert variant='info' className={ mainStyle.widthAlert + ' d-flex justify-content-around align-items-center myAlert'}>
            <div className='w-100'>
                <div className='w-100 d-flex justify-content-end align-content-center'>
                    <button className={mainStyle.closeAllert} onClick={removeAlert}>X</button>
                </div>
                <hr />
                <h3 className='m-0 text-center'>Welcome in EpiBooks</h3>
                <p className='p-3 text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsam soluta? Suscipit accusamus repudiandae consectetur rerum omnis unde libero nostrum.
                </p>
            </div>
        </Alert>
    )
}