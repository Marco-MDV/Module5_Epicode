import mainStyle from '../../mainStyle.module.css'
import { Alert } from 'react-bootstrap'

export default function MyAlert() {
    const removeAlert = () => {
        document.querySelector('.myAlert').classList.add('d-none')
    }
    return (
        <Alert variant='info' className={ mainStyle.widthAlert + ' d-flex justify-content-around align-items-center myAlert'}>
            <div className='w-100'>
                <div className='position-relative w-100 d-flex justify-content-center align-content-center'>
                    <h3 className='m-0 text-center'>Welcome in EpiBooks</h3>
                    <button className={mainStyle.closeAllert + ' position-absolute top-0 end-0'} onClick={removeAlert}>X</button>
                </div>
                <hr />
                <p className='p-3 text-center'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsam soluta? Suscipit accusamus repudiandae consectetur rerum omnis unde libero nostrum.
                </p>
            </div>
        </Alert>
    )
}